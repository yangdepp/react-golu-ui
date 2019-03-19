import React from 'react';
// import './icons/wechat.svg';
// import './icons/alipay.svg';
import './importAllIcons';
import './icon.scss';

interface IconProps {
  name: string;
  onClick: React.MouseEventHandler<SVGElement>;
  //  声明onClick时，指定类型为React.MouseEventHandler，里面的e.target为SVG元素
  // onClick: (e: React.MouseEvent) => void;
}

//  这个类型接受一个参数
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="golu-icon" {...props}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon;