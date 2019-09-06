import React, {Component} from 'react'
import axios from 'axios'

export default class Products extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            bananas: true
        }
    }
    componentDidMount() {
        axios.get('/api/front-end')
        .then(response => {
            console.log(response.data)
            this.setState({products: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <h1>Products</h1>
        )
    }
}