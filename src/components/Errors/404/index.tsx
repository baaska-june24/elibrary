import * as React from "react";
import { useRouter } from "next/router";
import Container from "~/components/Container";
import Button from "~/components/Button";
import withLayout from "~/components/Layout";

const Error404 = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="center">
        <img src="/images/not-found.svg" />
        <h1>{`Таны хайсан хуудас олдсонгүй :(`}</h1>
        <Button
          onClick={() => {
            if (window.history.length <= 1) {
              router.push("/");
            } else {
              window.history.go(-1);
            }
          }}
          type="primary"
        >
          Өмнөх хуудас руу буцах
        </Button>
      </div>
      <style jsx>{`
        .center {
          margin: 2rem auto;
          text-align: center;
        }

        h1 {
          color: #ccc;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </Container>
  );
};

export default Error404;

export const WrappedError404 = withLayout({})(Error404);
