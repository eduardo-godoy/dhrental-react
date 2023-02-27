import React, { Component } from "react";
import Category from './Category'

class Categorys extends Component{

    constructor(){
        super()
        this.state = { categorys:null }}

        componentDidMount(){
            fetch('http://localhost:3001/api/categorys')
            .then(res => (res.json()))
            .then(result => this.setState({categorys:result.data}))
            .catch(e => (console.log(e)))
           
        }


        render(){
            return (
                <React.Fragment>
                    <section className="section-productos">
                    <h6 className="titulo-productos">Categorias en la base de datos</h6>

                        {this.state.categorys === null ? <div className="cargando">Espere un momento por favor....</div> :
                                            this.state.categorys.map((category,index)=>{
                                                return  <Category  {...category}  key={index} />
                                            })
                                         }
            </section>
                </React.Fragment>
            )}
}

export default Categorys;