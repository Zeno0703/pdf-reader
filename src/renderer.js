/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './styles/index.css';
import App from './app.jsx';
import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(<App />);

const fs = require('fs');

setTimeout(() => {
    const openButton = document.getElementsByClassName("i5irnY_dMVvxf24JHmTK").item(0);
    openButton.addEventListener('click', () => {

        const dialogConfig = {
            title: 'Select a file',
            buttonLabel: 'Open',
            properties: ['openFile']
        };
        electron.openDialog('showOpenDialog', dialogConfig).then(result => {
            const filePath = result?.filePaths?.[0];
            console.log(filePath);
        })
    });
}, 0);
