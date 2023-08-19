import React from "react";
import "./pagination.scss";

export default function Pagination({
  currentPage,
  totalPages,
  pagesRange,
  startingPageNumber,
  handlePageClick,
  handlePreviousPageClick,
  handleNextPageClick,
}) {
  return (
    <section className="pages">
      {currentPage > 1 && (
        <div className="page-number" onClick={handlePreviousPageClick}>
          {"<"}
        </div>
      )}

      {Array.from(
        { length: pagesRange },
        (_, index) => startingPageNumber + index
      ).map((pageNum) => (
        <div
          key={pageNum}
          className={`page-number${pageNum === currentPage ? " active" : ""}`}
          onClick={() => handlePageClick(pageNum)}
        >
          {pageNum}
        </div>
      ))}

      {currentPage < totalPages && (
        <div className="page-number" onClick={handleNextPageClick}>
          {">"}
        </div>
      )}
    </section>
  );
}
