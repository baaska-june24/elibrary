import * as React from "react";
import withLayout from "~/components/Layout";
import Mylibrary from "~/components/My/Mylibrary";
import ProfileLayout from "~/components/My/Profile/Layout";
import { useRouter } from "next/router";
import { message } from "antd";

const MyLibrary = (props: any) => {
  const router = useRouter();
  const paymentStatus = router.query.paymentStatus;

  React.useEffect(() => {
    if (paymentStatus === "success") {
      message.success("Гүйлгээ амжилттай хийгдлээ");
    } else if (paymentStatus) {
      message.error(paymentStatus);
    }
  }, [paymentStatus]);

  return (
    <>
      <ProfileLayout {...props}>
        <Mylibrary />
      </ProfileLayout>
    </>
  );
};

export default withLayout({ requireSignIn: true, ssr: false })(MyLibrary);
