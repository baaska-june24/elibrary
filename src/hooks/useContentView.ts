import { useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_CONTENT_VIEW } from "~/queries/contents.graphql";

const useContentView = (contentId: string | string[]) => {
  const [updateContentViewCount] = useMutation(UPDATE_CONTENT_VIEW);

  useEffect(() => {
    updateContentViewCount({
      variables: {
        contentId: contentId
      }
    });
  }, [contentId]);

  return;
};

export default useContentView;
