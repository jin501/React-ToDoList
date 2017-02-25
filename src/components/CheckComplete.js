import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

const CheckComplete = (props) => {

  {console.log('button has be rendered')}
  // debugger
  return (
    <div className="Button">
      {props.complete ?
        <Button size="mini" circular icon='check' ></Button>
        : <Button positive size="small" circular icon onClick={props.handleComplete}></Button>}
    </div>
  );
}

export default CheckComplete;
