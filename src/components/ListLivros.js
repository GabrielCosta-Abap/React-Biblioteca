import React, { useEffect } from "react";
import CardLivro from "./CardLivro";
import { useState } from "react";
import API from '../service/API';

export default function ListLivros() {
    const [livros, setLivros ] = useState([]);

  useEffect(() => {
    API.get('/livro')
      .then(response => {
        setLivros(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


    return (
        <section className="w3-row w3-container w3-margin-top">
        {  livros.map( livro => 
                <CardLivro key={livro.book_id} livro={livro}></CardLivro>
                )}
        </section>
    )
}