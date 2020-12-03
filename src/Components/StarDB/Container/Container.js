import React from "react";

export default function Container({children, classNames}) {
  console.log(classNames)
  return (<div className={`${classNames} container`}>{children}</div>)
}
