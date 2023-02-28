import React from "react";
import Products from './Products'
import Users from './Users'
import NotFound from './NotFound'
import Categorys from "./Categorys";
import Totales from "./Totales";
import LastProductCreate from "./LastProductCreate";
import { Link, Switch, Route } from 'react-router-dom'
import LastUserCreate from "./LastUsersCreate";


function Panel(){

    return(

        <>
        
        <section className="panel-admin">
           <ol className="list-panel">
           <Link to='/totales'><li className="item-list">Totales</li></Link>
            <Link to='/users'><li className="item-list">Usuarios</li></Link>
            <Link to='/productos'><li className="item-list">Productos</li></Link>
            <Link to='/ultimoUsuarioCreado'><li className="item-list">Ultimo usuario Creado</li></Link>
            <Link to='/ultimoProductoCreado'><li className="item-list">Ultimo producto Creado</li></Link>
            <Link to='/categorias'><li className="item-list">Categorias</li></Link>
           </ol>
        </section> 

            <Switch>
                <Route exact path="/" component={Products}/>
                <Route path="/totales" component={Totales}/>
                <Route path="/productos" component={Products}/>
                <Route path="/users" component={Users}/>
                <Route path="/categorias" component={Categorys}/>
                <Route path="/ultimoProductoCreado" component={LastProductCreate}/>
                <Route path="/ultimoUsuarioCreado" component={LastUserCreate}/>
                <Route component={NotFound} />
            </Switch>

        </>
    )
}

export default Panel;