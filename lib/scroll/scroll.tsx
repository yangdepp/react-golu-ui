import React, { HTMLAttributes } from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="golu-scroll" {...rest}>
      <div className="golu-scroll-inner" style={{ right: -scrollbarWidth() }}>
        {props.children}
      </div>
    </div>
  );
};

export default Scroll;
