import React, { ReactElement } from "react";
import "./layout.scss";
import { scopedClassMaker } from "../helpers/classes";
import Sider from "./sider";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const sc = scopedClassMaker("golu-layout");

const Layout: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  const childrenAsArray = props.children as Array<ReactElement>;
  const hasSider =
    length in childrenAsArray &&
    childrenAsArray.some(node => node.type === Sider);

  return (
    <div
      className={sc({ "": true, hasSider }, { extra: className })}
      {...restProps}
    >
      {props.children}
    </div>
  );
};
export default Layout;
