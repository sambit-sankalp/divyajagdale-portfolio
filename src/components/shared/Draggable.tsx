'use client';
import React, { useRef, useState } from 'react';

type Props = {
  innerRef: React.MutableRefObject<any>;
  rootClass?: string;
  children: React.ReactNode;
};

const Draggable = ({ innerRef, rootClass = '', children }: Props) => {
  const ourRef: React.MutableRefObject<any> = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const handleDragStart = (e: React.MouseEvent) => {
    if (!ourRef.current) return;
    const slider = (ourRef.current as HTMLElement).children[0];
    const startX = e.pageX - (slider as HTMLElement).offsetLeft;
    const startY = e.pageY - (slider as HTMLElement).offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = 'grabbing';
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = 'default';
  };
  const handleDrag = (e: any) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0];
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
    console.log(walkX, walkY);
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={rootClass + 'flex overflow-x-scroll sm:overflow-x-hidden'}
    >
      {children}
    </div>
  );
};

export default Draggable;
