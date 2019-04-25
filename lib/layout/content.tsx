import React from 'react';
import { scopedClassMaker } from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = scopedClassMaker('golu-layout-content');

const Content: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <div className={sc('', { extra: className })} {...restProps}>
      {props.children}
    </div>
  );
};
export default Content;
