import * as React from "react";
import { useState } from "react";
import { Carousel } from "antd";
import Lightbox from "react-image-lightbox";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";
import "react-image-lightbox/style.css";
import "./style.less";

interface IProps {
  files: any[];
}

const SamplePages = ({ files = [] }: IProps) => {
  const imagesCount = files.length;

  const [isOpen, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openLightbox = (e: any, idx: number) => {
    e.preventDefault();
    setOpen(true);
    setImageIndex(idx);
  };

  const closeLightbox = () => {
    setOpen(false);
  };

  const handlePrevRequest = () => {
    setImageIndex((imageIndex + imagesCount - 1) % imagesCount);
  };

  const handleNextRequest = () => {
    setImageIndex((imageIndex + 1) % imagesCount);
  };

  if (files.length === 0) {
    return null;
  }

  const pages = files.map(({ file }: any) => {
    // const key = `preview/${file.key.replace("public/preview/", "")}`;

    return {
      id: file,
      image: getImageUrl(
        JSON.stringify({
          bucket: "cdn.esan.mn",
          edits: {
            resize: {
              background: "white",
              fit: "cover",
              width: 700
            },
            jpeg: {
              quality: 100
            }
          },
          key: file
        })
      ),
      previewImage: getImageUrl(
        JSON.stringify({
          bucket: "cdn.esan.mn",
          edits: {
            resize: {
              background: "white",
              fit: "cover",
              width: 200
            },
            jpeg: {
              quality: 80
            }
          },
          key: file
        })
      )
    };
  });

  const settings = {
    dots: false,
    draggable: true,
    infinite: pages.length >= 6,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          slidesToScroll: 5,
          slidesToShow: 5
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToScroll: 3,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToScroll: 3,
          slidesToShow: 3
        }
      }
    ],
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 6,
    speed: 500
  };

  return (
    <>
      <Carousel {...settings}>
        {pages.map((page: any, idx: any) => (
          <div className="padding" key={page.id}>
            <div
              key={page.id}
              className="pages"
              onClick={e => openLightbox(e, idx)}
            >
              <img src={page.previewImage} alt={page.id} />
            </div>
          </div>
        ))}
      </Carousel>

      {typeof window !== "undefined" && isOpen && (
        <Lightbox
          mainSrc={pages[imageIndex].image}
          nextSrc={pages[(imageIndex + 1) % pages.length].image}
          prevSrc={pages[(imageIndex + pages.length - 1) % pages.length].image}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={handlePrevRequest}
          onMoveNextRequest={handleNextRequest}
        />
      )}
    </>
  );
};

export default SamplePages;
