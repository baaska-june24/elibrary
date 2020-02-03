import { isIOS, isSafari, isMobileSafari } from "react-device-detect";

export const canLoadWebp = !(isIOS || isSafari || isMobileSafari);

export const filterOption = (query: any, option: any) =>
  option.props.children.toLowerCase().indexOf(query.toLowerCase()) > -1;

export const getQueryParam = (field: string, router?: any) => {
  let value: any;

  if (router && router.query && router.query[field]) {
    value = router.query[field];
  }
  if (
    !value &&
    "object" === typeof window &&
    (window as any).__NEXT_DATA__.nextExport
  ) {
    const urlParams = new URLSearchParams(window.location.search);
    value = urlParams.get(field);
  }

  return value;
};

export enum IUploadFileType {
  "cover",
  "avatar",
  "content"
}

export interface IFileInfo {
  bucket: string;
  name: string;
  key: string;
  data?: any;
}

export const setEmpty = (str: string | null | undefined): string =>
  str ? str : "";

export const compare = (a: any, b: any) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const getImageUrl = (request: any) =>
  `${process.env.CDN_ENDPOINT}/${
    typeof btoa === "function" ? btoa(request) : require("btoa")(request)
  }`;
