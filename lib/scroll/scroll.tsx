import React, { HTMLAttributes, UIEventHandler, useState, useEffect, useRef } from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, setBarTop] = useState(0);

  const onScroll: UIEventHandler = (e) => {
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    setBarTop((scrollTop * viewHeight) / scrollHeight);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  // 页面渲染后算出滚动条的高度
  useEffect(() => {
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  }, []);

  return (
    <div className="golu-scroll" {...rest}>
      <div
        className="golu-scroll-inner"
        style={{ right: -scrollbarWidth() }}
        onScroll={onScroll}
        ref={containerRef}
      >
        {props.children}
      </div>
      <div className="golu-scroll-track">
        <div
          className="golu-scroll-bar"
          style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
        ></div>
      </div>
    </div>
  );
};

export default Scroll;
