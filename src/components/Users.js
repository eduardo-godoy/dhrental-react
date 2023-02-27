import React, { Component } from "react";
import User from './User'

class Users extends Component{

    constructor(){
        super()
        this.state = { users:null }}

        componentDidMount(){
            fetch('http://localhost:3001/api/users')
            .then(res => (res.json()))
            .then(result => this.setState({users:result.data}))
            .catch(e => (console.log(e)))
           
        }

        render(){
            return (
                <React.Fragment>
                    <section className="section-productos">
                    <h6 className="titulo-productos">Usuarios en la base de datos</h6>

                        {this.state.users === null ? <div className="cargando">Espere un momento por favor...</div> :
                                            this.state.users.map((user,index)=>{
                                                return  <User  {...user}  key={index} />
                                            })
                                         }
            </section>
                </React.Fragment>
            )}
}

export default Users;