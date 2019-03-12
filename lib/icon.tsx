import React from 'react';
// import './icons/wechat.svg';
// import './icons/alipay.svg';
import './importAllIcons'

interface IconProps {
  name: string;
}

//  这个类型接受一个参数
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </span>
  )
}

export default Icon;