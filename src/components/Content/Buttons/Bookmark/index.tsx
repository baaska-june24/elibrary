import * as React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Button from "~/components/Button";
import { Icon, notification } from "antd";
import "./style.less";
import {
  Create_BookmarkMutation,
  Create_BookmarkMutationVariables,
  Delete_BookmarkMutation,
  Delete_BookmarkMutationVariables,
  Is_BookmarkedQuery,
  Is_BookmarkedQueryVariables
} from "~/generated/graphql";
import {
  CREATE_BOOKMARK,
  DELETE_BOOKMARK,
  IS_BOOKMARKED
} from "./queries.graphql";
import { User } from "~/hooks/useSession";
import { DataProxy } from "apollo-cache";
import { EsanMetrics } from "~/utils/analytics";

interface IProps {
  content: any;
  user: User;
}

export default ({ content, user }: IProps) => {
  const { data } = useQuery<Is_BookmarkedQuery, Is_BookmarkedQueryVariables>(
    IS_BOOKMARKED,
    {
      variables: {
        contentId: content.id,
        userId: user.id
      }
    }
  );

  const [createBookmarkAction] = useMutation<
    Create_BookmarkMutation,
    Create_BookmarkMutationVariables
  >(CREATE_BOOKMARK);
  const [deleteBookmarkAction] = useMutation<
    Delete_BookmarkMutation,
    Delete_BookmarkMutationVariables
  >(DELETE_BOOKMARK);

  const isBookmarked = data && !!data.isBookmarked;

  const handleBookmark = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isBookmarked) {
      await deleteBookmarkAction({
        variables: {
          where: {
            content_id: {
              _eq: content.id
            },
            user_id: {
              _eq: user.id
            }
          }
        },
        update: updateBookmark
      });
    } else {
      await createBookmarkAction({
        variables: {
          data: [
            {
              content_id: content.id
            }
          ]
        },
        update: updateBookmark
      });

      EsanMetrics.collectEvent({
        action: "content_bookmark",
        content: content.id
      });
    }

    notification.success({
      message: "Амжилттай хадгаллаа!",
      placement: "bottomRight",
      key: "bookmark_notification"
    });
  };

  const updateBookmark = async (proxy: DataProxy) => {
    const variables = {
      contentId: content.id,
      userId: user.id
    };
    const data = await proxy.readQuery<
      Is_BookmarkedQuery,
      Is_BookmarkedQueryVariables
    >({
      query: IS_BOOKMARKED,
      variables
    });

    if (isBookmarked) {
      data.isBookmarked = null;
    } else {
      data.isBookmarked = {
        __typename: "bookmarks",
        content_id: content.id,
        user_id: user.id
      };
    }

    await proxy.writeQuery({
      query: IS_BOOKMARKED,
      variables,
      data
    });
  };

  return (
    <Button
      type={isBookmarked ? "primary" : "default"}
      ghost={!isBookmarked}
      bordered={isBookmarked}
      className={"bookmark-button"}
      onClick={handleBookmark}
    >
      <Icon type="star" theme={isBookmarked ? "filled" : "outlined"} /> Хадгалах
    </Button>
  );
};
