declare module "*/queries.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const IS_BOOKMARKED: DocumentNode;
  export const CREATE_BOOKMARK: DocumentNode;
  export const DELETE_BOOKMARK: DocumentNode;
  export const GET_BOOKMARKED_CONTENTS: DocumentNode;

  export default defaultDocument;
}

declare module "*/query.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const CREATE_ORGANIZATION_REQUEST: DocumentNode;
  export const SEARCH_TEXT: DocumentNode;
  export const SEARCH_RESULT: DocumentNode;
  export const CHECK_STATUS: DocumentNode;
  export const GET_PLAGIARISM_HISTORY: DocumentNode;

  export default defaultDocument;
}

declare module "*/authors.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const AuthorInfo: DocumentNode;
  export const GET_LIST_AUTHORS: DocumentNode;
  export const GET_LIST_VW_AUTHORS: DocumentNode;
  export const RANDOM_AUTHORS: DocumentNode;
  export const GET_SINGLE_AUTHOR: DocumentNode;
  export const GET_SINGLE_AUTHOR_DETAIL: DocumentNode;
  export const CREATE_AUTHOR: DocumentNode;
  export const UPDATE_AUTHOR: DocumentNode;
  export const CREATE_AUTHOR_REVIEW: DocumentNode;
  export const GET_AUTHOR_REVIEWS: DocumentNode;
  export const GET_AUTHORS_AGGREGATE: DocumentNode;
  export const GET_AUTHORS_CONTENTS: DocumentNode;

  export default defaultDocument;
}

declare module "*/contents.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const ContentCard: DocumentNode;
  export const GET_SINGLE_CONTENT: DocumentNode;
  export const GET_LIST_CONTENTS: DocumentNode;
  export const GET_SUGGEST_CONTENTS: DocumentNode;
  export const GET_AGGREGATE_CONTENTS: DocumentNode;
  export const GET_USERS_CONTENTS_STATUS: DocumentNode;
  export const GET_USERS_CONTENTS: DocumentNode;
  export const GET_SINGLE_CONTENT_DETAIL: DocumentNode;
  export const GET_CONTENT_REVIEWS: DocumentNode;
  export const CREATE_CONTENT: DocumentNode;
  export const CREATE_CONTENT_REVIEW: DocumentNode;
  export const UPDATE_CONTENTS: DocumentNode;
  export const UPDATE_USERS_CONTENTS_STATUS: DocumentNode;
  export const GET_ORGANIZATIONS_PAID_CONTENTS: DocumentNode;
  export const GET_AGGREGATE_ORG_CONTENTS: DocumentNode;
  export const UPDATE_CONTENT_VIEW: DocumentNode;
  export const EDIT_UPDATE_CONTENT: DocumentNode;
  export const UPSERT_CONTENTS_AUTHORS: DocumentNode;
  export const UPSERT_CONTENTS_TAGS: DocumentNode;
  export const UPDATE_CONTENTS_ORGANIZATIONS: DocumentNode;

  export default defaultDocument;
}

declare module "*/files.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const CREATE_FILES: DocumentNode;

  export default defaultDocument;
}

declare module "*/home.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GET_FEATURED_CONTENTS: DocumentNode;

  export default defaultDocument;
}

declare module "*/library.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GET_PAID_CONTENT_LIST: DocumentNode;

  export default defaultDocument;
}

declare module "*/membership.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GET_MEMBERSHIP: DocumentNode;
  export const GET_CURRENT_MEMBERSHIP: DocumentNode;

  export default defaultDocument;
}

declare module "*/organizations.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GET_LIST_ORGANIZATIONS: DocumentNode;
  export const GET_SINGLE_ORGANIZATION: DocumentNode;
  export const GET_SINGLE_ORGANIZATION_INFO: DocumentNode;
  export const GET_ORGANIZATION_USERS: DocumentNode;
  export const UPDATE_ORGANIZATION: DocumentNode;
  export const GET_VW_ORGANIZATIONS_COUNT: DocumentNode;
  export const GET_VW_ORGANIZATION: DocumentNode;
  export const GET_ORGANIZATIONS_AGGREGATE: DocumentNode;
  export const GET_ORGANIZATION_ACCOUNT: DocumentNode;
  export const ORGANIZATION_ROLE: DocumentNode;
  export const GET_ORGANIZATION_CONTENTS: DocumentNode;
  export const DELETE_MAP_USER_OTGANIZATIONS: DocumentNode;

  export default defaultDocument;
}

declare module "*/package.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GET_PACKAGES: DocumentNode;
  export const GET_SINGLE_PACKAGE: DocumentNode;
  export const GET_PACKAGES_AGGREGATE: DocumentNode;
  export const CREATE_PACKAGE: DocumentNode;
  export const DELETE_PACKAGE: DocumentNode;
  export const UPDATE_PACKAGE: DocumentNode;
  export const UPDATE_MAP_CONTENTS_PACKAGE: DocumentNode;
  export const INSERT_MAP_CONTENTS_PACKAGE: DocumentNode;
  export const DELETE_MAP_CONTENTS_PACKAGE: DocumentNode;
  export const INSERT_MAP_PACKAGES_FILES: DocumentNode;
  export const DELETE_MAP_PACKAGES_FILES: DocumentNode;

  export default defaultDocument;
}

declare module "*/payment.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GET_WITHDRAWAL_REQUEST: DocumentNode;
  export const CREATE_PAYMENT: DocumentNode;
  export const CREATE_TRANSACTION: DocumentNode;
  export const DELETE_PAYMENT_DETAIL: DocumentNode;
  export const UPDATE_PAYMENT: DocumentNode;
  export const GET_BASKET_ITEMS: DocumentNode;
  export const GET_TRANSACTION_BY_HEADER_ID: DocumentNode;
  export const GET_TRANSACTION_BY_PKID: DocumentNode;
  export const CREATE_INVOICE: DocumentNode;
  export const CHECK_ORGANIZATION_REGISTRATION: DocumentNode;
  export const GET_TRANSACTION_LIST: DocumentNode;
  export const GET_CONTENT_TRANSACTION: DocumentNode;
  export const GET_PAID_CONTENTS: DocumentNode;
  export const GET_PAID_CONTENTS_AGGREGATE: DocumentNode;
  export const GET_ORGANIZATION_BALANCE: DocumentNode;
  export const INSERT_WITHDRAWAL_REQUEST: DocumentNode;
  export const GET_TRANSACTION_USER: DocumentNode;

  export default defaultDocument;
}

declare module "*/search.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const CONTENT_SEARCH: DocumentNode;

  export default defaultDocument;
}

declare module "*/tags.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GET_LIST_TAG_TYPES: DocumentNode;
  export const GET_LIST_TAG_OPTIONS: DocumentNode;

  export default defaultDocument;
}

declare module "*/users.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GET_USER: DocumentNode;
  export const UPDATE_USER: DocumentNode;
  export const CREATE_USER_FILES: DocumentNode;
  export const UPDATE_USER_FILES: DocumentNode;

  export default defaultDocument;
}

declare module "*/worker.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const SEND_EMAIL: DocumentNode;
  export const EMAILS: DocumentNode;

  export default defaultDocument;
}
