import React from 'react';
import {observer} from 'mobx-react';

const TimerDisplay = observer(({leftText, rightText}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
      <div>
        {leftText}
      </div>
      <div>
        {rightText}
      </div>
    </div>
  );
});

export default TimerDisplay