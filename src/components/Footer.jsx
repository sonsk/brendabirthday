import React from 'react';
import MyCountdown from './MyCountDown';

export default function Footer() {
  return (
    <div className="w-full fixed bottom-0 py-4">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <div className="font-light">
          <MyCountdown/>
        </div>
        <div className="text-center">
            <p className="age-bottom font-light">02</p>
            <p className="pt-4">NOV</p>
        </div>
      </div>
      <div>
        <p className="text-center text-xs font-light">made by steve@sonsk-2024</p>
      </div>
     
    </div>
  );
}