import React, {
  HTMLAttributes,
  UIEventHandler,
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
  TouchEventHandler,
} from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const [barVisible, setBarVisible] = useState(false);
  const [translateY, _setTranslateY] = useState(0);
  const setTranslateY = (y: number) => {
    if (y < 0) {
      y = 0;
    } else if (y > 150) {
      y = 150;
    }
    _setTranslateY(y);
  };

  const timerIdRef = useRef<number | null>(null);

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
    setBarVisible(true);
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    setBarTop((scrollTop * viewHeight) / scrollHeight);

    if (timerIdRef.current !== null) {
      clearInterval(timerIdRef.current);
    }
    timerIdRef.current = window.setTimeout(() => {
      setBarVisible(false);
    }, 500);
  };

  const firstYRef = useRef(0);
  const draggingRef = useRef(false);
  const firstBarTopRef = useRef(0);
  let moveCount = useRef(0);
  const pulling = useRef(false);

  const onMouseDownBar: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstBarTopRef.current + delta;
      const { current } = containerRef;
      const scrollHeight = current!.scrollHeight;
      const viewHeight = current!.getBoundingClientRect().height;
      setBarTop(newBarTop);
      containerRef.current!.scrollTop = (newBarTop * scrollHeight) / viewHeight;
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

  const onSelect = (e: Event) => {
    if (draggingRef.current) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    document.addEventListener('selectstart', onSelect);
    return () => {
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('mousemove', onMouseMoveBar);
      document.removeEventListener('selectstart', onSelect);
    };
  }, []);

  const onTouchMove: TouchEventHandler = (e) => {
    const deltaY = e.touches[0].clientY - lastYRef.current;
    moveCount.current += 1;
    if (moveCount.current === 1 && deltaY < 0) {
      pulling.current = false;
      return;
    }
    if (pulling.current === false) return;
    setTranslateY(translateY + deltaY);
    lastYRef.current = e.touches[0].clientY;
  };
  const ontouchstart: TouchEventHandler = (e) => {
    const scrollTop = containerRef.current!.scrollTop;
    if (scrollTop !== 0) return;
    pulling.current = true;
    lastYRef.current = e.touches[0].clientY;
    moveCount.current = 0;
  };
  const onTouchEnd: TouchEventHandler = (e) => {
    setTranslateY(0);
  };
  const lastYRef = useRef(0);

  return (
    <div className="golu-scroll" {...rest}>
      <div
        className="golu-scroll-inner"
        style={{ right: -scrollbarWidth(), transform: `translateY(${translateY}px)` }}
        onScroll={onScroll}
        ref={containerRef}
        onTouchMove={onTouchMove}
        onTouchStart={ontouchstart}
        onTouchEnd={onTouchEnd}
      >
        {props.children}
      </div>
      {barVisible && (
        <div className="golu-scroll-track">
          <div
            className="golu-scroll-bar"
            style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
            onMouseDown={onMouseDownBar}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Scroll;
