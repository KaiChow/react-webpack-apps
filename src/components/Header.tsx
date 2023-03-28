import React from "react";

type HeaderProps = {
  title: string;
};
const Header: React.FC<HeaderProps> = (props) => {
  return <div>Header-{props.title}</div>;
};
export default Header;
