import * as React from "react";
import Link from "next/link";
import { Rate, Icon, Badge } from "antd";
import "./style.less";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";
import Avatar, { AvatarProps } from "antd/lib/avatar";

interface IProps {
  author: any;
}

const AuthorCard = ({ author }: IProps) => {
  let fileKey = author.avatar || null;
  if (fileKey === "avatar/4flr7jxpsdojf_favicon.png") {
    fileKey = null;
  } else {
    fileKey = author.avatar;
  }

  const names = [author.lastname.trim(), author.firstname.trim()];
  const displayname = names.filter(item => item !== '').join('.').trim();

  const imageRequest = JSON.stringify({
    bucket: "cdn.dev.esan.mn",
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
  let contentCount = 0;

  try {
    if (author.contentcount) {
      contentCount = author.contentcount;
    } else if (author.contents_connection_aggregate) {
      contentCount = author.contents_connection_aggregate.aggregate.count;
    }
  } catch (e) {
    contentCount = 0;
  }

  // const customStr = (str: any) => {
  //   const max = 14;
  //   if (str.length <= max) {
  //     return str;
  //   }
  //   const reg = new RegExp(".{1," + max + "}", "g");
  //   const parts = str.match(reg);
  //   return parts.join("\n");
  // };

  const checkAuthor = () => {
    if (author.avatar === "avatar/4flr7jxpsdojf_favicon.png") {
      return null;
    } else {
      return displayname;
    }
  };

  const avatarProps: AvatarProps = {
    children: author.firstname.substring(0, 12),
    shape: "circle",
    size: "large",
    src: "",
    style: {
      backgroundColor: "#ffffff",
      width: "115px",
      height: "115px",
      color: "#000000",
      fontSize: "35px",
      fontWeight: "bolder",
      fontFamily: "Cormorant SC",
      textShadow: "4px 4px 4px #aaa",
      wordWrap: "break-word"
    }
  };

  const avatar = <Avatar {...avatarProps} />;

  let fontSize = "20px";
  if (displayname.length > 10)
    fontSize = "17px";

  if (displayname.length > 12)
    fontSize = "15px";

  return (
    <Link href={`/authors/${author.id}`}>
      <a className="author-card">
        <div
          // className="author-avatar"
          style={{
            display: "inline-block",
            width: "150px",
            height: "130px",
            // borderRadius: "100%",
            paddingTop: "40px",
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundColor: "#ffffff",
            color: "#000000",
            fontSize: fontSize,
            //fontWeight: 700,
            //fontFamily: "Cormorant SC",
            wordWrap: "break-word"
            // backgroundImage: url ? `url(${url})` : null
          }}
        >
          {displayname.toUpperCase()}
        </div>

        {/* <h3>{checkAuthor()}</h3> */}
        <Rate value={author.averagerate || 0} />
        {/* <h4>{`Бүтээлүүд (${contentCount})`}</h4> */}
        <Link href={`/authors/${author.id}`}>
          <h4 style={{color: "#aaa"}}>
            Дэлгэрэнгүй <Icon type="caret-right" />
          </h4>
        </Link>
      </a>
    </Link>
  );
};

export default AuthorCard;
