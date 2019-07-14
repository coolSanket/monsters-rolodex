import React from "react";
import "./card-list.styles.css";

export const CardList = props => {
  /*console.log(props);
  console.log(props.name);
  console.log(props.age);*/
  return <div className="card-list">{props.children}</div>;
};
