import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

setTimeout(function(){
  document.body.className="";
},500);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
