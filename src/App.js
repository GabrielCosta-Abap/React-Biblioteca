import React, { useEffect } from "react";
import { useState } from "react";
import API from './service/API';
import './App.css';
import Menu from './components/Menu';
import ListLivros from './components/ListLivros';
import TelaListarLivros from "./components/TelaListarLivros";
import TelaCadastrarLivro from "./components/TelaCadastrarLivro";
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<TelaListarLivros />}/>
        <Route path="/cadastrar" element={<TelaCadastrarLivro />}/>
      </Routes>

    </>
  );
}

export default App;
