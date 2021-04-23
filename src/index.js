import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router'
import './css/style.css';



/* <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.4.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script> */
render(<Router />, document.querySelector('#main'))



