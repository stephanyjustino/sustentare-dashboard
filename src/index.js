import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, fab)

export default function App(){
  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)