import React from "react";
import { useState, useEffect } from "react";
import API from '../service/API';
import './FormularioLivros.css';

export default function ListLivros() {
    
    const [livroNew, setLivroNew] = useState({});
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        // Buscar os dados dos autores da API
        API.get("/autor")
            .then((response) => {
                setAutores(response.data);
            })
            .catch((err) => {
                console.error("Ops! Ocorreu um erro ao buscar os autores", err);
            });
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;

        // Verifica se o valor é um número positivo de até 4 dígitos
        if (name === "AnoPublicacao" && value !== "") {
            const isValid = /^\d{1,4}$/.test(value);
            if (!isValid) {
                return; // Retorna sem atualizar o estado
            }
        }

        if (name === "Isbn" && value !== "") {
            const isValid = /^\d{1,10}$/.test(value);
            if (!isValid) {
                return; // Retorna sem atualizar o estado
            }
        }

        setLivroNew((prevLivro) => ({
            ...prevLivro,
            [name]: value
        }));
    }

    function cadastraLivro(event){
        event.preventDefault()
        
            API.post("/livro", livroNew)
            .then((response) => {
                setLivroNew(response.data) 
                console.log(livroNew)
                window.alert("Livro registrado com sucesso!")
                
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }


    return (
        <div class="box-formulario">        
                
                <div class="formulario">
                    
                    <div class="title-form">
                    <h1><i class="icon icon-comments-o"></i> Cadastrar um novo livro</h1>
                    </div>
                    <form onSubmit={cadastraLivro}>
                            
                        <span>
                            <input value={livroNew.Isbn} onChange={handleInputChange} type="number" class="input-slide" id="Isbn" name="Isbn" placeholder="Isbn" autocomplete="off" required="true"/>
                            <label for="Isbn"> <i class="icon icon-user-outline"></i> </label>
                        </span>
                        <span>
                            <input value={livroNew.Nome} onChange={handleInputChange} type="text" class="input-slide" id="Nome" name="Nome" placeholder="Título" autocomplete="off" required="true"/>
                            <label for="Nome"> <i class="icon icon-mail-3"></i> </label>
                        </span>
                        <span>
                            <select
                                value={livroNew.AutorId}
                                onChange={handleInputChange}
                                className="input-slide"
                                id="AutorId"
                                name="AutorId"
                                required
                            >
                                <option value="">Selecione um autor</option>
                                {autores.map((autor) => (
                                    <option key={autor.autor_id} value={autor.autor_id}>
                                        {autor.autor_id} - {autor.nome}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="AutorId">
                                <i className="icon icon-help"></i>
                            </label>
                            {/* <input value={livroNew.AutorId} onChange={handleInputChange} type="text" class="input-slide" id="AutorId" name="AutorId" placeholder="Autor" autocomplete="off" required="true"/>
                            <label for="AutorId"> <i class="icon icon-help"></i> </label> */}
                        </span>
                        <span>
                            <input value={livroNew.Editora} onChange={handleInputChange} type="text" class="input-slide" id="Editora" name="Editora" placeholder="Editora" autocomplete="off" required="true"/>
                            <label for="Editora"> <i class="icon icon-help"></i> </label>
                        </span>
                        <span>
                            <input value={livroNew.AnoPublicacao} onChange={handleInputChange} type="number" class="input-slide" id="AnoPublicacao" name="AnoPublicacao" placeholder="Ano de publicação" autocomplete="off" required="true"/>
                            <label for="AnoPublicacao"> <i class="icon icon-help"></i> </label>
                        </span>

                        <div class="box-btn">
                            <button type="submit" class="btn-envia zoom-shadow">
                                <i class="icon icon-export"> Salvar</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    )
}
