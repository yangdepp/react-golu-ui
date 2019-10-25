import React, { InputHTMLAttributes } from 'react';
import { scopedClassMaker } from '../helpers/classes';
import './input.scss';
const sc = scopedClassMaker('golu-input');

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return <input {...props} className={sc('', { extra: className })} {...rest} />;
};
export default Input;
