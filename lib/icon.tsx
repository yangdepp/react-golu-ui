import React from 'react'

interface IconProps {
  name: string;
}

//  这个类型接受一个参数
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>{props.name}</span>
  )
}

export default Icon;