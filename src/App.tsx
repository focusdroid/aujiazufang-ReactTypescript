import React, { Fragment } from 'react';

function App(props:any) {
  return (
    <Fragment>
      { props.children }
    </Fragment>
  );
}

export default App;
