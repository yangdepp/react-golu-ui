import React, { Fragment, ReactElement } from "react";
import ReactDOM from "react-dom";
import { Icon } from "../index";
import { Button } from "../index";
import "./dialog.scss";
import { scopedClassMaker } from "../classes";

interface Props {
  visible: boolean;
  maskClosable?: boolean;

  footer?: Array<ReactElement>;
  onOk?: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
  okText?: string;
  cancelText?: string;
  title?: string;

  buttons?: Array<ReactElement>;
  // onClose: React.MouseEventHandler;
}

const scopedClass = scopedClassMaker("golu-dialog");
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = props => {
  const onClickCancel: React.MouseEventHandler = e => {
    props.onCancel(e);
  };

  // const onClickMask: React.MouseEventHandler = e => {
  //   if (props.maskClosable) {
  //     props.onClose(e);
  //   } else {
  //     return;
  //   }
  // };

  const dialogDom = props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={() => {}} />
      <div className={sc()}>
        <div className={sc("close")} onClick={() => {}}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{props.children}</main>
        {!props.footer && (
          <footer className={sc("footer")}>
            <Button onClick={onClickCancel}>
              {props.cancelText || "取消"}
            </Button>
            <Button type="primary" onClick={() => {}}>
              {props.okText || "确定"}
            </Button>
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(dialogDom, document.body);
};

Dialog.defaultProps = {
  maskClosable: true
};

export default Dialog;
