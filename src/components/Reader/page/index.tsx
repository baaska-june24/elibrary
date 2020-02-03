import * as React from "react";
import Decrypt, { page_url, get_headers } from "../utils";
import useAxios from "axios-hooks";

import PDFjs from "./PDFjs";
import Spinner from "../spinner";

interface IProps {
  contentId: string | number;
  number: number;
  width: number;
  height: number;
  scale: number;
}

const PagePDF = (props: IProps) => {
  const url = page_url(props.contentId, props.number - 1);
  const [headers, setHeaders] = React.useState(null);

  React.useEffect(() => {
    const getHeaders = async () => {
      const _headers = await get_headers();
      setHeaders(_headers);
    };

    getHeaders();
  }, []);

  const [{ data, loading, error }] = useAxios({
    url,
    headers
  });

  const renderBody = (data: any) => {
    return (
      <PDFjs
        data={Decrypt(data)}
        scale={props.scale}
        page_width={props.width}
        page_number={props.number}
      />
    );
  };

  return (
    <div
      className="page-wrapper"
      style={{
        width: props.width,
        height: props.height
      }}
    >
      {error && <div>{error.message}</div>}
      {loading && <Spinner />}
      {data && renderBody(data)}
    </div>
  );
};

export default React.memo(PagePDF);
