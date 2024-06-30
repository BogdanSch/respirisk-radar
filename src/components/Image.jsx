import React from "react";

export default function Image({ className, src, alt }) {
  return <img className={`image ${className}`} src={src} alt={alt} />;
}
