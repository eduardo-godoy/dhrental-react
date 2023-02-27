import React, { Component } from "react";
import Total from './TotalCategorys'
import TotalUsers from "./totalUsers";
import TotalsProducts from "./TotalsProducts";

class Totales extends Component{

    constructor(){
        super()
        this.state = { totalesCategorias:null,totalesProduct:null,totalsUsers:null }}

        componentDidMount(){
            fetch('http://localhost:3001/api/categorys')
            .then(res => (res.json()))
            .then(result => this.setState({totalesCategorias:result.meta}))
            .catch(e => (console.log(e)))
           
            fetch('http://localhost:3001/api/users')
            .then(res => (res.json()))
            .then(result => this.setState({totalsUsers:result.meta}))
            .catch(e => (console.log(e)))

            fetch('http://localhost:3001/api/products')
            .then(res => (res.json()))
            .then(result => this.setState({totalesProduct:result.meta}))
            .catch(e => (console.log(e)))

        }


        render(){
            return (
                <React.Fragment>
                    <section className="section-productos">
                    <h6 className="titulo-productos">Totales de usuarios, categorias y productos</h6>

                        {this.state.totalesCategorias === null ? <div className="cargando">Espere un momento por favor....</div> :
                                            this.state.totalesCategorias.map((total,index)=>{
                                                return <Total  {...total}  key={index} />
                                            })
                                         }

                         {this.state.totalsUsers === null ? <div className="cargando">Espere un momento por favor....</div> :
                                            this.state.totalsUsers.map((totalP,index)=>{
                                                return <TotalUsers {...totalP} key={index}/>
                                            })
                                         }

                        {this.state.totalesProduct === null ? <div className="cargando">Espere un momento por favor....</div> :
                                            this.state.totalesProduct.map((totalP,index)=>{
                                                return <TotalsProducts {...totalP} key={index}/>
                                            })
                                         }

            </section>
                </React.Fragment>
            )}
}

export default Totales;