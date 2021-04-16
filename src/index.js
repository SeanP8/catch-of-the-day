import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router'
import './css/style.css';

// class StorePicker extends React.Component {
//     render() {
//         return <p>Hello!</p>
//     }
// }


render(<Router/>, document.querySelector('#main'))