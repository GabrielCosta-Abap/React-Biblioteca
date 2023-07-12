import React, { useState } from "react";
import './CardLivro.css';

export default function CardLivro({livro}) {

    let disponibilidade = livro.disponivel ? 'Disponivel' : 'Indisponível';
    let classeDisponibilidade =livro.disponivel ? 'disponivel' : 'indisponivel';
    
    classeDisponibilidade += " ag-courses-item_date";

    let imgNum = Math.floor(Math.random() * 4)
    imgNum = imgNum == 0 ? 1 : imgNum
    let nomeLivro = "/livro" + imgNum + ".jpg";

    return (

        // w3-col l4 m6 s12 w3-container w3-padding-16 
        <div className="card-box">
            <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                
                <img className="capaLivro" src={process.env.PUBLIC_URL + nomeLivro}></img>
                <div class="ag-courses-item_bg"></div>
        
                <div class="ag-courses-item_title">
                    {livro.nome}
                </div>
        
                <div class="ag-courses-item_date-box">
                    Editora: <span class="ag-courses-item_date"> {livro.editora} </span> <br></br>
                    Ano de publicação: <span class="ag-courses-item_date"> {livro.ano_publicacao} </span> <br></br>
                    <span className={classeDisponibilidade}> {disponibilidade} </span>

                </div>
                </a>
            </div>
        </div>

    )

}
