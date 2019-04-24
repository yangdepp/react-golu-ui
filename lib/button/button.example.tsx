import React from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button onClick={() => console.log('click default')}>default</Button>
      <Button disabled>disabled</Button>
      <Button
        type="primary"
        onMouseEnter={() => console.log('onmouseenter')}
        onClick={() => console.log('click primary')}
      >
        primary
      </Button>
    </div>
  );
};

export default ButtonExample;
