import React, { useEffect } from "react";
import { useState } from "react";
import API from '../service/API';
import '../App.css';
import './TelaListarLivros.css';
import Menu from '../components/Menu';
import ListLivros from './ListLivros';

export default function TelaListarLivros() {

    return(
        <>
            <main className="lista-livros">
                {/* <div class="ag-format-container"> */}
                    {/* <div class="ag-courses_box"> */}
                        <ListLivros></ListLivros>
                    {/* </div> */}
                {/* </div> */}
            </main>
        </>
    )
}