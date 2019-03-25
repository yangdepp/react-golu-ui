// import React from 'react';
// import ReactDOM from 'react-dom'
// import Icon from './icon/icon';
// const fn: React.MouseEventHandler = (e) => {
//   console.log(e);
//   console.log(e.target);

//   //  如果想要打印e.target的属性，需要用断言明确e.target的类型
//   console.log((e.target as SVGUseElement).href)
// }


// ReactDOM.render(
//   <div>
//     <Icon name="wechat"
//       className="weixin"
//       onClick={fn}
//       onMouseEnter={() => { console.log('enter') }}
//       onMouseLeave={() => { console.log('leave') }}
//       onTouchStart={() => { console.log('touch') }} />
//     <Icon name="alipay"
//       onClick={fn}
//       onMouseEnter={() => { console.log('enter') }}
//       onMouseLeave={() => { console.log('leave') }} />
//   </div>, document.querySelector('#root'))

export { default as Icon } from './icon/icon';