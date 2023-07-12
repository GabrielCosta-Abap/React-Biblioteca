import React, { useEffect } from "react";
import { useState } from "react";
import API from '../service/API';
import '../App.css';
import Menu from '../components/Menu';
import FormularioLivros from './FormularioLivros';

export default function TelaCadastrarLivro() {

    return(
            <>
                <main>
                    <FormularioLivros></FormularioLivros>
                </main>
            </>
    )
}