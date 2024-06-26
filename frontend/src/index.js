import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PostContextProvider} from './context/postcontext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostContextProvider>
    <App />
    </PostContextProvider>
    
  </React.StrictMode>
);

