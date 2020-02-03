import * as React from "react";
import Link from "next/link";
import "./style.less";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";

interface IProps {
  organization: any;
}

const OrganizationCard = ({ organization }: IProps) => {
  const fileKey = organization.avatar || "avatar/4flr7jxpsdojf_favicon.png";
  const displayname = `${organization.name || ""}`.trim();

  const imageRequest = JSON.stringify({
    bucket: organization.bucket,
    edits: {
      resize: {
        background: "white",
        fit: "cover",
        height: 100,
        width: 100
      },
      [canLoadWebp ? "webp" : "jpeg"]: {
        quality: 80
      }
    },
    key: fileKey
  });

  const url = getImageUrl(imageRequest);

  return (
    <Link href={`/organizations/${organization.id}`}>
      <a className="author-card">
        <div
          className="author-avatar"
          style={{ backgroundImage: `url(${url})` }}
        />
        <h3>{displayname}</h3>
        <h4>{`Контентууд (${organization.contentcount || 0})`}</h4>
      </a>
    </Link>
  );
};

export default OrganizationCard;
