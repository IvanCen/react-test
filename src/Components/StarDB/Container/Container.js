import React from "react";

export default function Container({children, classNames}) {
  return (<div className={`${classNames} container`}>{children}</div>)
}
