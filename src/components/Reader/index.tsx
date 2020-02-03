import React from "react";
import useAxios from "axios-hooks";

import Reader from "./reader";
import { document_info_url } from "./utils.js";

import "./style.css";
import "pdfjs-dist/web/pdf_viewer.css";

interface IProps {
  contentId: string;
  currentPage: number;
}

const ReaderApp = (props: IProps) => {
  const contentId = props.contentId;
  const currentPage = props.currentPage;

  const url = document_info_url(contentId);
  const [{ data, loading, error }] = useAxios(url);

  if (error) {
    return <div>{error.message}</div>;
  } else if (loading) {
    return <div>Loading data ...</div>;
  } else if (data !== null) {
    return <Reader contentId={contentId} currentPage={currentPage} {...data} />;
  }

  return <div>Default message before request is made.</div>;
};

export default ReaderApp;
