import React, { Fragment, ReactElement, ReactFragment, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../index';
import './dialog.scss';
import { scopedClassMaker } from '../classes';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  maskClosable?: boolean;
}

const scopedClass = scopedClassMaker('golu-dialog');
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
      <div className={sc('mask')} onClick={onClickMask} />
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 && (
          <footer className={sc('footer')}>
            {props.buttons &&
              props.buttons.map((button, index) => React.cloneElement(button, { key: index }))}
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(dialogDom, document.body);
};

Dialog.defaultProps = {
  maskClosable: true,
};

export const alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog visible={true} onClose={onClose} buttons={[<button onClick={onClose}>ok</button>]}>
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
};

export const confirm = (content: string, onOk?: () => void, onCancel?: () => void) => {
  const cancel = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onCancel && onCancel();
  };

  const ok = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onOk && onOk();
  };

  const component = (
    <Dialog
      visible={true}
      onClose={cancel}
      buttons={[
        <button
          onClick={() => {
            ok();
          }}
        >
          ok
        </button>,
        <button
          onClick={() => {
            cancel();
          }}
        >
          cancel
        </button>,
      ]}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
};

export const modal = (content: ReactNode | ReactFragment) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog onClose={onClose} visible={true}>
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};

export default Dialog;
