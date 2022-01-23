import React from "react";

export function Container({ classes, children }) {
  return <div className={classes}>{children}</div>;
}

export function Row({ classes, children }) {
  return <div className={classes}>{children}</div>;
}

export function Col({ size, classes, children }) {
  return (
    <div
      className={`${size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")} ${classes}`}
    >
      {children}
    </div>
  );
}