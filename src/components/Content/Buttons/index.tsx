import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { User } from "~/hooks/useSession";
import { GET_CURRENT_MEMBERSHIP } from "~/queries/membership.graphql";
import { GET_CONTENT_TRANSACTION } from "~/queries/payment.graphql";
import {
  Get_Content_TransactionQuery,
  Get_Content_TransactionQueryVariables,
  Get_Current_MembershipQuery,
  Get_Current_MembershipQueryVariables
} from "~/generated/graphql";
import BookmarkButton from "./Bookmark";
import BuyButton from "./Buy";
import ReadButton from "./Read";
import Button from "~/components/Button";

interface IProps {
  user: User;
  content: any;
  isOwner: any;
}

const useMembership = (user: User) => {
  const { data } = useQuery<
    Get_Current_MembershipQuery,
    Get_Current_MembershipQueryVariables
  >(GET_CURRENT_MEMBERSHIP, {
    variables: {
      user_id: user.id
    }
  });

  if (data && data.currentMembership && data.currentMembership.length > 0) {
    return data.currentMembership[0];
  }

  return null;
};

const useTransaction = (contentId: number) => {
  const { data } = useQuery<
    Get_Content_TransactionQuery,
    Get_Content_TransactionQueryVariables
  >(GET_CONTENT_TRANSACTION, {
    variables: { content_id: contentId }
  });

  if (
    data &&
    data.payment_transactions &&
    data.payment_transactions.length > 0
  ) {
    return data.payment_transactions[0];
  }

  return null;
};

const ContentButton = ({ user, content, isOwner }: IProps) => {
  // check membership
  const currentMembership = useMembership(user);
  // check transaction
  const transaction = useTransaction(content.id);
  const orgId = isOwner.organization.id;

  const isContentOwner = () => {
    if (user && user.organizations.length > 0) {
      return user.organizations.some(
        ({ organization_id }) => organization_id === orgId
      );
    }
  };

  if (
    content.payment_type === "free" ||
    (content.payment_type === "membership" && currentMembership) ||
    (content.payment_type === "cash" && transaction) ||
    isContentOwner() ||
    user.roles_connection[0].role.name === "admin"
  ) {
    return <ReadButton contentId={content.id} />;
  }

  if (content.payment_type === "membership" && !currentMembership) {
    return (
      <Button
        type="primary"
        style={{ marginRight: "1rem", marginBottom: "1rem" }}
        href="/my/membership"
        icon="user"
      >
        Элсэх
      </Button>
    );
  }

  if (content.payment_type === "cash") {
    return <BuyButton content={content} />;
  }

  return null;
};

export { BookmarkButton, BuyButton, ReadButton, ContentButton };
