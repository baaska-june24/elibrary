import * as React from "react";
import withLayout from "~/components/Layout";
import BookmarkContents from "~/components/My/BookmarkContents";
import ProfileLayout from "~/components/My/Profile/Layout";

const MyBookmarks = (props: any) => (
  <ProfileLayout {...props}>
    <BookmarkContents />
  </ProfileLayout>
);

export default withLayout({
  requireSignIn: true,
  ssr: false
})(MyBookmarks);
