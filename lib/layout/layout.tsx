import React, { ReactElement } from 'react';
import './layout.scss';
import { scopedClassMaker } from '../classes';
import Sider from './sider';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const sc = scopedClassMaker('golu-layout');

const Layout: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  let hasSider = false;
  if ((props.children as Array<ReactElement>).length) {
    (props.children as Array<ReactElement>).map(node => {
      if (node.type === Sider) {
        hasSider = true;
      }
    });
  }
  return (
    <div className={[sc('', { extra: className }) , hasSider && 'hasSider' ].join(' ')} {...restProps}>
      {props.children}
    </div>
  );
};
export default Layout;
