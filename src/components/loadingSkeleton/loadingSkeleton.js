import "./loadingSkeleton.scss";
import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-poster-image"></div>
      <div className="skeleton-info">
        <div className="skeleton-title"></div>
        <div className="skeleton-detail"></div>
      </div>
    </div>
  );
}
