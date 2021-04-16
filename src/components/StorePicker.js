import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.current;
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Enter Store name</h2>
                <input
                    type='text'
                    ref={this.myInput}
                    required placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type='submit'>Visit Store</button>
            </form>
        )
    }

}


// const StorePicker = () => {
//     const myInput = React.useRef();

//     const goToStore = event => {
        
//         // 1. stop the form from submitting
//         event.preventDefault();
//         // 2. get the text from the input
//             // use ref - this is used to reference the dom elements
//         console.log(myInput.current);
//         // 3. change the page to /store/whatever-they-entered
        
//     };
//     return (
        
        
//         <form className='store-selector' onSubmit={goToStore}>
//                 <h2> enter store name</h2>
                
//                 <input type='text'
//                     ref={myInput}
//                     required placeholder='Store Name'
//                     defaultValue={getFunName()}
                    
//                 />
//                 <button type='submit' >Visit Store </button>
//         </form>
        
//     )
// }

export default StorePicker;