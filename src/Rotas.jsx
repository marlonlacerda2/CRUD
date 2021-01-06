import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import CadastroProduto from './views/produtos/cadastro';
import TrabalheConosco from './views/trabalheconosco/trabalheconosco';
import Home from './views/home'


export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact={true} path='/cadastro-produto' component={CadastroProduto}/>
                <Route exact={true} path='/trabalhe-conosco' component={TrabalheConosco}/>
                <Route exact={true} path='/' component={Home}/>
            </Switch>
        </HashRouter>
    )
}