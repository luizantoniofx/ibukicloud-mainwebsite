import React from 'react'
import App from './app'
import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ErrorDefault from './ErrorDefault/ErrorDefault'

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="*" element={<ErrorDefault />} >
        </Route>
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );