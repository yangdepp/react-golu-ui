import React from "react";
// import './icons/wechat.svg';
// import './icons/alipay.svg';
import "./importAllIcons";
import "./icon.scss";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("golu-icon");

//  继承一下SVGAttributes或者HTMLAttributes，react已经把事件及属性都声明好了。
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  spin?: boolean;
  // onClick: React.MouseEventHandler<SVGElement>;
  //  声明onClick时，指定类型为React.MouseEventHandler，里面的e.target为SVG元素
  // onClick: (e: React.MouseEvent) => void;
}

//  这个类型接受一个参数
const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  spin,
  ...restProps
}) => {
  return (
    //  在jsx中写js语法，必须用{}括起来，如{...props}
    <svg
      className={sc({ "": true, svg: Boolean(spin) }, { extra: className })}
      {...restProps}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
