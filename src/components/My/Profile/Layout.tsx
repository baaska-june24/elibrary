import * as React from "react";
import Header from "./index";
import Menu from "./menu";
import { useRouter } from "next/router";

interface IProps {
  children: React.ReactElement;
}

const ProfileLayout = (props: IProps) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Menu router={router} />
      {props.children}
    </>
  );
};

export default ProfileLayout;
