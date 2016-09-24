import React from 'react';
import {render} from 'react-dom';
import Card from './card.js'
import Routers from './routers.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import AAA from './bbb.js'
render(<Routers />,document.getElementById('root'));
