import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserListProvider from './context/UserListProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserListProvider>
        <App />
    </UserListProvider>);
