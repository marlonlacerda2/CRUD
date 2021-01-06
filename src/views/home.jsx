import React from 'react';


function Home(){

    return(
    <div className="jumbotron">
        <h1 className="display-3">BEM VINDO</h1>
        <p className="lead">ESSE É O SEU SISTEMA, UTILIZE A PAGINA DE NAVEGAÇÃO PARA ACESSAR AS PAGINAS</p>
        <hr className="my-4"/>
        <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">CADASTRAR</a>
        </p>
    </div>)

}


export default Home;