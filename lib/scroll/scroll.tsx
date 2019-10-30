import React, {
  HTMLAttributes,
  UIEventHandler,
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
} from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);

  const setBarTop = (number: number) => {
    if (number < 0) {
      return;
    }
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const maxBarTop = ((scrollHeight - viewHeight) * viewHeight) / scrollHeight;
    if (number > maxBarTop) {
      return;
    }
    _setBarTop(number);
  };

  const onScroll: UIEventHandler = (e) => {
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    setBarTop((scrollTop * viewHeight) / scrollHeight);
  };

  const firstYRef = useRef(0);
  const draggingRef = useRef(false);
  const firstBarTopRef = useRef(0);

  const onMouseDownBar: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstYRef.current;
      setBarTop(firstBarTopRef.current + delta);
    }
  };
  const onMouseUpBar = () => {
    draggingRef.current = false;
  };
  const containerRef = useRef<HTMLDivElement>(null);
  // 页面渲染后算出滚动条的高度
  useEffect(() => {
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  }, []);
  useEffect(() => {
    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    return () => {
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('mousemove', onMouseMoveBar);
    };
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
          onMouseDown={onMouseDownBar}
        ></div>
      </div>
    </div>
  );
};

export default Scroll;
