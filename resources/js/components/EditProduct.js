import React, { Component } from 'react';

class EditProduct extends Component {
 
    constructor(props) {
        super(props);
       /* Initialize the state. */
       
        this.state = {
            editProduct: {
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
        this.props.onEdit(this.state.editProduct);
    }

    render() {
        const divStyle = {
            position: 'absolute',
            left: '35%',
            top: '50%',
            flexDirection: 'space-between',      
            marginLeft: '30px'
        }
        
        const inputStyle = {
        margin: '0px 10px 0px 10px'
        }

        const product = this.props.product ? this.props.product : '';
        
        return(
        <div className="edit">         
            <div style={divStyle}> 
                <h2> Edit product </h2>
                <form onSubmit={this.handleSubmit}>
                <label> Title: 
                    <input id="title" style={inputStyle} defaultValue={product.title} type="text" onChange={(e)=>this.handleInput('title',e)} />
                    <input id="id" defaultValue={product.id} type="hidden" />
                </label>
                
                <label> Description: 
                    <input id="description" style={inputStyle} defaultValue={product.description} type="text" onChange={(e)=>this.handleInput('description',e)} />
                </label>

                <label> Price: 
                    <input id="price" style={inputStyle} defaultValue={product.price} type="text" onChange={(e)=>this.handleInput('price',e)} />
                </label>
                
                { /* Input fields for Price and availability omitted for brevity */}
        
                <input type="submit" value="Submit" />
                </form>
            </div>
        </div>)
    }
}
 
export default EditProduct;