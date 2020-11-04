import React, { Fragment, useEffect } from 'react';
import {get_csrf_token} from './api/index'

function App(props:any) {
  useEffect(() => {
    get_csrf_token()
  })
  return (
    <Fragment>
      { props.children }
    </Fragment>
  );
}

export default App;
