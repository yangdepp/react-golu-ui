import React from 'react';
import Icon from './icon';

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <Icon name="alipay" className="yyy"/>
      <Icon name="wechat"/>
      <Icon name="close"/>
    </div>
  );
};

export default IconExample;