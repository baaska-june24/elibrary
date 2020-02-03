import * as React from "react";
import { NextPageContext } from "next";
import { default as NextError } from "next/error";

import { WrappedError404 as Error404 } from "~/components/Errors/404";

interface IProps {
  statusCode: number;
}

const Error = ({ statusCode }: IProps) => {
  return (
    <>
      {statusCode === 404 ? (
        <Error404 />
      ) : (
        <NextError statusCode={statusCode} />
      )}
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
