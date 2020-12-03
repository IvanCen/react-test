import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from "./Application";
import { configureRootTheme } from '@yandex/ui/Theme'
import { theme } from '@yandex/ui/Theme/presets/default'
configureRootTheme({ theme })

ReactDOM.render(
  <Application/>,
  document.getElementById('root')
);

