import React from "react";
import pdfjs from "pdfjs-dist";
import {
  DefaultTextLayerFactory,
  PDFPageView,
  DefaultAnnotationLayerFactory
} from "pdfjs-dist/web/pdf_viewer";
import Spinner from "../spinner";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFjs = props => {
  const [loading, setLoading] = React.useState(true);
  const containerRef = React.createRef();
  const pdfDoc = pdfjs.getDocument({ data: props.data });

  React.useEffect(() => {
    pdfDoc.promise
      .then(function(pdfDocument) {
        return pdfDocument.getPage(1).then(function(pdfPage) {
          // remove old stuffs here
          containerRef.current.innerHTML = "";

          var pdfPageView = new PDFPageView({
            container: containerRef.current,
            id: props.page_number,
            scale: props.scale / 1.333,
            defaultViewport: pdfPage.getViewport({
              scale: props.scale / 1.333
            }),
            textLayerFactory: new DefaultTextLayerFactory(),
            annotationLayerFactory: new DefaultAnnotationLayerFactory()
          });

          pdfPageView.setPdfPage(pdfPage);
          pdfPageView.draw();
          setLoading(false);
        });
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [props.data, props.scale, props.page_number]);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("copy", handleCopy);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("copy", handleCopy);
      }
    };
  });

  const handleCopy = event => {
    event.clipboardData.setData("text/plain", window.location.href);
    event.preventDefault();
  };

  return (
    <>
      {loading && <Spinner />}
      <div ref={containerRef} />
    </>
  );
};

export default PDFjs;
