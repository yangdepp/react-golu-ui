import React from 'react';
// import './icons/wechat.svg';
// import './icons/alipay.svg';
import './importAllIcons';
import './icon.scss';

interface IconProps {
  name: string;
}

//  这个类型接受一个参数
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="golu-icon">
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon;