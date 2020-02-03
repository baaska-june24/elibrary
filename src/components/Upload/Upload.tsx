import * as React from "react";
import { useState } from "react";
import { Upload, Icon, Form, message, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { UploadFile } from "antd/lib/upload/interface";
import { UploadChangeParam } from "antd/lib/upload";

import "./style.less";

const FormItem = Form.Item;
const Dragger = Upload.Dragger;

interface IProps extends FormComponentProps {
  cover?: any;
}

const FileUpload = (props: IProps) => {
  const [fileList, setFileList] = useState();
  const fileUploadProp = {
    accept: "application/pdf",
    beforeUpload: () => false,
    name: "file",
    onChange(info: any) {
      let tmpFileList = [...info.fileList];

      tmpFileList = tmpFileList.slice(-1);

      tmpFileList = tmpFileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }
        return file;
      });

      setFileList(tmpFileList);

      const status = info.file.status;

      if (status === "done") {
        message.success(`${info.file.name} Файлыг хуулахад бэлэн боллоо.`);
      } else if (status === "error") {
        message.error(`${info.file.name} Файл оруулах явцад алдаа гарлаа.`);
      }
    }
  };

  return (
    <FormItem>
      {props.form.getFieldDecorator("content", {
        rules: [
          {
            message: "Контент оруулна уу",
            required: true
          }
        ]
      })(
        <Dragger {...fileUploadProp} fileList={fileList}>
          <div className="upload-icon">
            <Icon type="file-pdf" />
          </div>
          <div className="upload-button">
            Контент хуулахдаа энд дарж эсвэл чирч оруулна уу
          </div>

          <div className="upload-hint">Зөвхөн PDF өргөтгөлтэй файл дэмжинэ</div>
        </Dragger>
      )}
    </FormItem>
  );
};

const CoverUpload = (props: IProps) => {
  const [isLoading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(props.cover);

  function getBase64(file: UploadFile | File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file as any);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const beforeUpload = (file: File) => {
    const isImage = ["image/jpeg", "image/png"].indexOf(file.type) > -1;
    if (!isImage) {
      message.error("Та зөвхөн зурган файл оруулах боломжтой!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Зургийн хэмжээ  2MB-с ихгүй  байна.");
    }

    return false;
  };

  const handleChange = async (info: UploadChangeParam) => {
    const imageUrl = await getBase64(info.file);
    setImagePreview(imageUrl);
  };

  const uploadButton = (
    <div>
      <Icon type={isLoading ? "loading" : "plus"} />
      <div className="ant-upload-text">Cover зураг хуулах</div>
      <div className="upload-hint">
        Зургийн хэмжээ 2MB-с бага,
        <br />
        540x800 харьцаатай байх шаардлагатай
      </div>
    </div>
  );

  return (
    <FormItem>
      {props.form.getFieldDecorator("cover", {
        rules: [
          {
            message: "Ковер зураг оруулна уу",
            required: imagePreview ? false : true
          }
        ]
      })(
        <Upload
          name="cover"
          accept="image/jpeg, image/png"
          listType="picture-card"
          className="avatar-uploader"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          showUploadList={false}
        >
          {imagePreview ? (
            <img src={imagePreview} style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
      )}
    </FormItem>
  );
};

export { CoverUpload, FileUpload };
