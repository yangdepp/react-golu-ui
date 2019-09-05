import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../index';
import { Button } from '../index';
import './dialog.scss';
import { scopedClassMaker } from '../helpers/classes'

interface Props {
  visible: boolean;
  maskClosable?: boolean;

  footer?: React.ReactNode | null;
  onOk?: React.MouseEventHandler;
  onCancel?: React.MouseEventHandler;
  okText?: string;
  cancelText?: string;
  title?: string;
}

const scopedClass = scopedClassMaker('golu-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = props => {
  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    const onCancel = props.onCancel;
    if (onCancel) {
      onCancel(e);
    }
  };

  const handelOk = (e: React.MouseEvent<HTMLElement>) => {
    const onOk = props.onOk;
    if (onOk) {
      onOk(e);
    }
  };

  const onClickMask = (e: React.MouseEvent<HTMLElement>) => {
    const onCancel = props.onCancel;
    const maskClosable = props.maskClosable;
    if (maskClosable && onCancel) {
      onCancel(e);
    } else {
      return;
    }
  };

  const defaultFooter =
    props.footer === null ? null : (
      <footer className={sc('footer')}>
        <Button onClick={handleCancel}>{props.cancelText || '取消'}</Button>
        <Button type="primary" onClick={handelOk}>
          {props.okText || '确定'}
        </Button>
      </footer>
    );

  const dialogDom = props.visible ? (
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask} />
      <div className={sc('')}>
        <div className={sc('close')} onClick={handleCancel}>
          <Icon name="close" />
        </div>
        <header className={sc('header')}>{props.title || '提示'}</header>
        <main className={sc('main')}>{props.children}</main>
        {props.footer === undefined ? (
          defaultFooter
        ) : (
          <footer className={sc('footer')}>{props.footer}</footer>
        )}
      </div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(dialogDom, document.body);
};

Dialog.defaultProps = {
  maskClosable: true,
};

export default Dialog;
