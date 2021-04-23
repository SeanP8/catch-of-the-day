import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef  = React.createRef();
    statusRef  = React.createRef();
    descRef  = React.createRef();
    imageRef = React.createRef();
    
    static propTypes = {
        addFish: PropTypes.func
    };

    createFish = e => {
        e.preventDefault();

        const fish = {
            name: this.nameRef.current,
            price: parseFloat(this.priceRef.current),
            status: this.statusRef.current,
            desc: this.descRef.current,
            image: this.imageRef.current
        }
        this.props.addFish(fish);
        e.currentTarget.reset();
        
    }
    render() {

        return (
            <form className='fish-edit'onSubmit={this.createFish}>
                < input name ='name' ref ={this.nameRef}type='text' placeholder ='name'/>
                < input name ='price'ref ={this.priceRef} type='text' placeholder ='price'/>
                < select name='status' ref={this.statusRef} >
                    <option value='available'>Fresh!</option>
                    <option value='unavailable'>Sold Out!</option>
                </ select>
                < input name ='image' ref={this.imageRef} type='text' placeholder ='image'/>
                < textarea name='desc' ref ={this.descRef}type='text' placeholder='desc' />
                <button type='submit'> + Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;