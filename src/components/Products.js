import React, { Component } from "react";
import Product from './Product'

class Products extends Component{

    constructor(){
        super()
        this.state = { products:null }}
        

        componentDidMount(){
            fetch('http://localhost:3001/api/products')
            .then(res => (res.json()))
            .then(result => this.setState({products:result.data}))
            .catch(e => (console.log(e)))
        }


        render(){
            return (
                <React.Fragment>
                    <section className="section-productos">
                    <h6 className="titulo-productos">Productos en la base de datos</h6>
                        {this.state.products === null ? <div className="cargando">Espere un momento por favor....</div> :
                                            this.state.products.map((product,index)=>{
                                                return  <Product  {...product}  key={index} />
                                            })
                                         }
            </section>
                </React.Fragment>
            )}
}

export default Products;