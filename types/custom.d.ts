//  给所有svg文件加一个默认导出
//  如果引入svg文件像这样： import wechat from './*.svg'，此时不加这个文件会报错

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}