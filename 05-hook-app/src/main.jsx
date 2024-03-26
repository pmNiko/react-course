import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './09-useContext/MainApp'
import './index.css'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
import { TodoApp } from './08-reducer/TodoApp.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <TodoApp />
    </React.StrictMode>
  </BrowserRouter>
)
