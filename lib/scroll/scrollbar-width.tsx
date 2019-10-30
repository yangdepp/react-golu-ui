export default function scrollbarWidth() {
  if (typeof document === 'undefined') {
    return 0;
  }
  const body = document.body;
  const box = document.createElement('div');
  const boxStyle = box.style;

  boxStyle.position = 'absolute';
  boxStyle.top = boxStyle.left = '-9999px';
  boxStyle.width = boxStyle.height = '100px';
  boxStyle.overflow = 'scroll';

  body.appendChild(box);
  const width = box.offsetWidth - box.clientWidth;

  body.removeChild(box);

  return width;
}
