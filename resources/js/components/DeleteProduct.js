import React, { Component } from 'react';

class DeleteProduct extends Component {
 
    constructor(props) {
        super(props);
       /* Initialize the state. */
       
        this.state = {
            deleteProduct: {
                id: 0,
                title: '',
                description: '',
                price: 0,
                availability: 0
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    handleInput(key, e) {
     
        /*Duplicating and updating the state */
        var id = document.getElementById('id').value;
        var state = Object.assign({}, this.state.editProduct); 
        state[key] = e.target.value;
        state['id'] = id;
        this.setState({editProduct: state });       
    
    }

    handleSubmit(e) {
        //preventDefault prevents page reload   
        e.preventDefault();
        /*A call back to the onAdd props. The current
         *state is passed as a param
         */
        this.props.onDelete(this.state.deleteProduct);
    }

    render() {
        const divStyle = {
            position: 'absolute',
            left: '35%',
            top: '30%',
            flexDirection: 'space-between',      
            marginLeft: '30px'
        }
        
        const inputStyle = {
        margin: '0px 10px 0px 10px'
        }
        
        return(
        <div>         
            <div style={divStyle}> 
                <h2> Delete </h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>)
    }
}
 
export default DeleteProduct;