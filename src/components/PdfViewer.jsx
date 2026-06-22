// PdfViewer.jsx

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.4.149/pdf.min.mjs`;

const PdfViewer = ({ pdfUrl }) => {
  const canvasRef = useRef(null);

  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [scale, setScale] = useState(1.5);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadPdf();
  }, [pdfUrl]);

  useEffect(() => {
    if (pdfDoc) {
      renderPage(pageNum);
    }
  }, [pdfDoc, pageNum, scale]);

  const loadPdf = async () => {
    try {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;

      setPdfDoc(pdf);
      setTotalPages(pdf.numPages);
    } catch (err) {
      console.error(err);
    }
  };

  const renderPage = async (num) => {
    const page = await pdfDoc.getPage(num);

    const viewport = page.getViewport({ scale });

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context,
      viewport,
    }).promise;
  };

  const nextPage = () => {
    if (pageNum < totalPages) {
      setPageNum((p) => p + 1);
    }
  };

  const prevPage = () => {
    if (pageNum > 1) {
      setPageNum((p) => p - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">

      <div className="flex gap-3 mb-4">
        <button onClick={prevPage}>
          Previous
        </button>

        <span>
          {pageNum} / {totalPages}
        </span>

        <button onClick={nextPage}>
          Next
        </button>

        <button onClick={() => setScale((s) => s + 0.2)}>
          Zoom +
        </button>

        <button onClick={() => setScale((s) => Math.max(0.5, s - 0.2))}>
          Zoom -
        </button>
      </div>

      <canvas
        ref={canvasRef}
        className="border shadow"
      />
    </div>
  );
};

export default PdfViewer;