import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/App.css';

// Punto di ingresso dell'app, montiamo App.tsx all'interno del div con id "app"
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Rendering del componente App nel DOM
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);