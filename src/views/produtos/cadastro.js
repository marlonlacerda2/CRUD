import React from 'react'
import ProdutoService from "../../app/produtoService";

const estadoInicial = {
    nome: '',
    id: 0,
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false
}


export default class CadastroProduto extends React.Component {

    state = estadoInicial

    constructor() {
        super()
        this.service = new ProdutoService()
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    limpaCampos = () => this.setState(estadoInicial)

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            id: this.state.id,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,

        }
        this.service.salvar(produto)
        this.limpaCampos()
        this.setState({ sucesso: true })

    }

    limpaSucesso= () => this.setState({sucesso:false})


    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    Cadastro de produtos
                </div>
                <div className='card-body'>

                    {this.state.sucesso ?
                        (<div onClick={this.limpaSucesso} class="alert alert-dismissible alert-success">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>Cadastro feito com Sucesso!</strong>
                        </div>) :
                        (
                            <div></div>
                        )
                    }
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Nome:* </label>
                                <input type='text' onChange={this.onChange} name='nome' value={this.state.nome} className='form-control' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>id:* </label>
                                <input type='text' onChange={this.onChange} name='id' value={this.state.id} className='form-control' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Descrição:*</label>
                                <textarea onChange={this.onChange} name='descricao' value={this.state.descricao} className='form-control' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Preço:* </label>
                                <input type='text' onChange={this.onChange} Name='preco' value={this.state.preco} className='form-control' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Fornecedor:* </label>
                                <input type='text' onChange={this.onChange} name='fornecedor' value={this.state.fornecedor} className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-1'>
                            <button onClick={this.onSubmit} className='btn btn-success'>Salvar</button>
                        </div>
                        <div className='col-md-1'>
                            <button onClick={this.limpaCampos} className='btn btn-primary'>Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}