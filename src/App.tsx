import React, { ReactElement } from 'react';
import './App.scss';
import Display from './components/Display';
import Button from './components/Button';

export default function App():ReactElement {
  return (
    <div className="wrapper">
      <div className="flex-wrapper">
        <div className="flex-row">
          <Display />
        </div>
        <div className="separator"></div>
        <div className="flex-row">
          <Button value="ac" className="horizontal-half">AC</Button>
          <Button value="/">/</Button>
          <Button value="*">*</Button>
        </div>
        <div className="flex-row">
          <Button value={7}>7</Button>
          <Button value={8}>8</Button> 
          <Button value={9}>9</Button>
          <Button value="-">-</Button>
        </div>
        <div className="flex-row">
          <Button value={4}>4</Button>
          <Button value={5}>5</Button>
          <Button value={6}>6</Button>
          <Button value="+">+</Button>
        </div>
        <div className="flex-row">
          <div className="left-section">
            <div className="flex-row">
              <Button value={1}>1</Button>
              <Button value={2}>2</Button>
              <Button value={3}>3</Button>
            </div>
            <div className="flex-row">
              <Button value=".">.</Button>
              <Button value={0} className="horizontal-half">0</Button>
            </div>
          </div>
          <div className="right-section">
            <Button value="=" className="vertical-half">=</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
