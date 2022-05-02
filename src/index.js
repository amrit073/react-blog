// import React from 'react';
import React from 'react';
import {createRoot} from 'react-dom/client';
import Mid from './App'

const Greeting = () => {
  return <>
    <Mid />
  </>;
}
const container = document.getElementById("root")
const root = createRoot(container)
// ReactDOM.render(<React.StrictMode><Greeting /></React.StrictMode>, document.getElementById('root'))
root.render(<React.StrictMode> <Greeting/></React.StrictMode>)