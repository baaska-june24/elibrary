import * as React from "react";
import { useRouter } from "next/router";
import { Icon } from "antd";
import Container from "~/components/Container";
import Button from "~/components/Button";
import withLayout from "~/components/Layout";

const Error403 = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="center">
        <div style={{ textAlign: "center", color: "#EEEEEE", margin: "100px" }}>
          <Icon type="disconnect" style={{ fontSize: 100 }} />
          <h2 style={{ color: "#EEEEEE" }}>Хандах боломжгүй</h2>
        </div>
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

export default Error403;

export const WrappedError403 = withLayout({})(Error403);
