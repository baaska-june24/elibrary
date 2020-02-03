import * as React from "react";
import Img from "react-progressive-image";

import "./style.less";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";

interface IProps {
  fileKey: string;
  bucket?: string;
  alt?: string;
  isBig?: boolean;
}

const Cover = ({ fileKey, bucket = "cdn.esan.mn", isBig, alt }: IProps) => {
  const coverImageRequest = JSON.stringify({
    bucket,
    edits: {
      resize: {
        background: "white",
        fit: "cover",
        height: isBig ? 400 : 200,
        width: isBig ? 267 : 140
      },
      ["jpeg"]: {
        quality: 100
      }
    },
    key: fileKey
  });

  const previewImageRequest = JSON.stringify({
    bucket,
    edits: {
      blur: 10,
      resize: {
        fit: "cover",
        height: 10,
        width: 7
      },
      [!canLoadWebp ? "jpeg" : "webp"]: {
        quality: 30
      }
    },
    key: fileKey
  });

  const url = getImageUrl(coverImageRequest);
  const previewUrl = getImageUrl(previewImageRequest);

  return (
    <div className={`cover ${isBig ?? "cover-big"}`}>
      <Img src={url} placeholder={previewUrl}>
        {(src: string) => <img src={src} alt={alt} />}
      </Img>
    </div>
  );
};

export default Cover;
