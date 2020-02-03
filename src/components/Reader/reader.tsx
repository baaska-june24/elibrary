import React from "react";
import useMedia from "use-media";
import PagePDF from "./page";
import Control from "./control";
import TitleComponent from "./title";

import ReaderOverlay from "./Overlay";

interface IProps {
  contentId: number;
  currentPage: number;
  page_count: number;
  page_height: number;
  page_width: number;
}

let timeout: NodeJS.Timeout;

const Reader = ({
  contentId,
  currentPage,
  page_count,
  page_height,
  page_width
}: IProps) => {
  const default_scale_unit = 0.1;
  const default_page_shift = 2;
  const [scale, setScale] = React.useState(1);
  const [current_page, setCurrentPage] = React.useState(currentPage);

  const isSmallScreen = useMedia({ maxWidth: 1224 });

  const [scale_unit, setScaleUnit] = React.useState(default_scale_unit);
  const [page_shift, setPageShift] = React.useState(default_page_shift);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (isSmallScreen) {
      setPageShift(1);
      setScaleUnit(0.05);
    }
  }, [isSmallScreen]);

  React.useEffect(() => {
    setScale(calc_scale());
  }, [page_width]);

  const calc_scale = () => {
    let [width, height] = getWindowSize();

    let h_scale = (height - 40) / page_height;
    let w_scale = (width - 60) / (page_width * 2);
    let _scale = Math.min(h_scale, w_scale);
    return _scale;
  };

  const handleResize = () => {
    const [width] = getWindowSize();

    timeout = setTimeout(() => {
      if (width <= 1224) {
        setPageShift(1);
        setScaleUnit(0.05);
      } else {
        setPageShift(default_page_shift);
        setScaleUnit(default_scale_unit);
      }
      if (timeout) {
        clearTimeout(timeout);
      }

      setScale(calc_scale());
    }, 250);
  };

  let pageHeight = page_height * scale;
  let pageWidth = page_width * scale;

  if (page_shift === 1) {
    pageWidth = pageWidth * 2;
    pageHeight = pageHeight * 2;
  }

  return (
    <div className="reader-wrapper">
      <TitleComponent content_id={contentId} />

      <Control
        page_count={page_count}
        current_page={current_page}
        content_id={contentId}
        setCurrentPage={setCurrentPage}
        scale={scale}
        setScale={setScale}
        page_shift={page_shift}
        setPageShift={setPageShift}
        scale_unit={scale_unit}
      />

      <ReaderOverlay>
        <div className="row">
          <div className="page">
            <PagePDF
              scale={scale * (page_shift === 1 ? 2 : 1)}
              width={pageWidth}
              height={pageHeight}
              contentId={contentId}
              number={current_page}
            />
          </div>
          {page_shift !== 1 && (
            <div className="page">
              <PagePDF
                scale={scale}
                width={pageWidth}
                height={pageHeight}
                contentId={contentId}
                number={current_page + 1}
              />
            </div>
          )}
        </div>
      </ReaderOverlay>
    </div>
  );
};

const getWindowSize = () => {
  const width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const height = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  return [width, height];
};

export default Reader;
