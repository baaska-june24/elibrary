import * as React from "react";
// import Img from "gatsby-image";
import Carousel from "~/components/Carousel";
import { Button } from "antd";
import useMedia from "use-media";
import Img from "react-progressive-image";
import { getImageUrl } from "~/utils/helpers";

interface IProps {
  banners: any;
}

const HomeCarousel = ({ banners }: IProps) => {
  const isMobileScreen = useMedia({ maxWidth: 767 });

  const imageUrl = (fileKey: string, bucket: string) => {
    const imageRequest = JSON.stringify({
      bucket,
      edits: {
        resize: {
          background: "white"
          // fit: "cover"
        }
      },
      key: fileKey
    });
    return getImageUrl(imageRequest);
  };

  const thumbnailUrl = (fileKey: string, bucket: string) => {
    const imageRequest = JSON.stringify({
      bucket,
      edits: {
        resize: {
          background: "white",
          // fit: "cover"
          height: 7,
          width: 10
        }
      },
      key: fileKey
    });
    return getImageUrl(imageRequest);
  };

  const renderItem = (banner: any) => {
    const image = (
      <Img
        src={imageUrl(
          banner.mobile_file_id && isMobileScreen
            ? banner.mobile_file_id
            : banner.file_id,
          banner.bucket
        )}
        placeholder={thumbnailUrl(
          banner.mobile_file_id && isMobileScreen
            ? banner.mobile_file_id
            : banner.file_id,
          banner.bucket
        )}
      >
        {(src: string) => (
          <img src={src} alt={banner.title} style={{ width: "100%" }} />
        )}
      </Img>
    );
    return (
      <div className="esan-slide-item" key={`esan-slide-${banner.file_id}`}>
        {banner.link ? (
          <a href={banner.link} target="_blank" rel="noopener">
            {image}
          </a>
        ) : (
          image
        )}
      </div>
    );
  };

  return (
    <Carousel autoplay adaptiveHeight>
      {(banners && banners.length > 0 && banners.map(renderItem)) || (
        <div className="esan-slide-item">
          <img src="/images/banner.png" style={{ maxWidth: "100%" }} />
          <div
            style={{
              paddingRight: "10%",
              position: "absolute",
              top: "30%",
              right: "0",
              width: "50%"
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: isMobileScreen ? "12px" : "16px",
                margin: 0
              }}
            >
              Салбар, салбарын бүх төрлийн бүтээлүүдийг нэг дор төвлөрүүлсэн
              мэдлэгийн нэгдсэн сан
            </h3>
            <Button
              type="ghost"
              style={{
                marginTop: "40px",
                color: "#ffffff"
              }}
              shape="round"
            >
              <a href="https://info.esan.mn/" target="_blank">
                Дэлгэрэнгүй
              </a>
            </Button>
          </div>
        </div>
      )}
    </Carousel>
  );
};

export default HomeCarousel;
