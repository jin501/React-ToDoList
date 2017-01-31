import React, { Component } from 'react';

const Button = (props) => {

  {console.log('button has be rendered')}
  // debugger
  return (
    <div className="Button">
      {props.complete ?
        <button disabled={props.complete}>Done</button>
        : <button onClick={props.handleComplete}>Done</button>}
    </div>
  );
}

export default Button;
