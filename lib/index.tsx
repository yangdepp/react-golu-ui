import React from 'react';
import ReactDOM from 'react-dom'
import Icon from './icon'
const fn: React.MouseEventHandler = (e) => {
  console.log(e);
  console.log(e.target);
  //  这里报错，因为target没有声明类型，所以这么写有可能会报错
  // console.log(e.target.href)

  //  如果想要打印e.target的属性，需要用断言明确e.target的类型
  console.log((e.target as SVGUseElement).href)
}


ReactDOM.render(
  <div>
    <Icon name="wechat" onClick={fn} />
    <Icon name="alipay" onClick={fn} />
  </div>, document.querySelector('#root'))