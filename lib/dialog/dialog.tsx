import React, { Fragment } from 'react';
import { Icon } from '../index';
import './dialog.scss';
import { scopedClassMaker } from '../classes';
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean;
}

const scopedClass = scopedClassMaker('golu-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = props => {
  const dialogDom = props.visible ? (
    <Fragment>
      <div className={sc('mask')} />
      <div className={sc()}>
        <div className={sc('close')}>
          <Icon name="close" />
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        <footer className={sc('footer')}>
          <button>确定</button>
          <button>取消</button>
        </footer>
      </div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(dialogDom, document.body);
};
export default Dialog;
