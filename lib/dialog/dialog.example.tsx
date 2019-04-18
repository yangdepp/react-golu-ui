import React, { useState } from 'react';
import Dialog from './dialog';

export default function() {
  const [x, setX] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => console.log('111')}>click</button>
      </div>
      <div>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x}>
          <div>hi</div>
        </Dialog>
      </div>
    </div>
  );
}
