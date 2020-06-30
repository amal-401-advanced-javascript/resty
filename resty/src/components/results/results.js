import React from 'react';
import ReactJson from 'react-json-view'
function Result(props) {
  return (
    <React.Fragment>
    <ReactJson src={props.result} theme="monokai" />
    </React.Fragment>
  );
}

export default Result;