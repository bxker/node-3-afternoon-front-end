import React, {Component} from 'react'
// import axios from 'axios'

export default class Admin extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: [],
    //         bananas: true
    //     }
    // } 

    render(){
        return(
            <>
                <h1>Admin</h1>
                <input placeholder="Name"></input>
                <input placeholder="Description"></input>
                <input placeholder="Price"></input>
                <input placeholder="Image URL"></input>
                <button>Add Product</button>
            </>
        )
    }
}