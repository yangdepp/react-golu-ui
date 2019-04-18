import React, { Fragment, ReactElement } from "react";
import { Icon } from "../index";
import "./dialog.scss";
import { scopedClassMaker } from "../classes";
import ReactDOM from "react-dom";

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  maskClosable?: boolean;
}

const scopedClass = scopedClassMaker("golu-dialog");
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = e => {
    if (props.maskClosable) {
      props.onClose(e);
    } else {
      return;
    }
  };

  const dialogDom = props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask} />
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{props.children}</main>
        <footer className={sc("footer")}>
          {props.buttons &&
            props.buttons.map((button, index) =>
              React.cloneElement(button, { key: index })
            )}
        </footer>
      </div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(dialogDom, document.body);
};

Dialog.defaultProps = {
  maskClosable: true
};

export const alert = (content: string) => {
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
};

export default Dialog;
