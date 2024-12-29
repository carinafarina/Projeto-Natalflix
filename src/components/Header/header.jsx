import gorro from '../../assets/header/gorro.png'
import vandinha from '../../assets/header/vandinha.png'
import seta from '../../assets/header/seta.png'
import lupa from '../../assets/header/lupa.png'
import casa from '../../assets/header/casa.png'
import filmes from '../../assets/header/filmes.png'
import series from '../../assets/header/series.png'
import favorito from '../../assets/header/favorito.png'
import config from '../../assets/header/config.png'
import natal from '../../assets/header/natal.png'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../pages/Inicio/inicio';
import S from './header.module.scss';



export default function Header() {
    return (
    <BrowserRouter>
        <header>   
            <section> 
                <img className={S.vandinha}src={vandinha} alt="Imgem da vandinha" />
                <img className={S.gorro}src={gorro} alt="Imgem de um gorro de natal" />                
                <img className={S.seta}src={seta} alt="Imgem de poligon" />                          
            </section> 
            <nav>
            <ul>
                <li>
                    <img src={lupa} alt="Imgem de uma lupa" />  
                    <Link to="/"><img src={casa} alt='casa'/></Link>
                    <Link to="filmes"><img src={filmes} alt='imagem de fita de filme'/></Link>
                    <Link to="series"><img src={series} alt='imagem de tv'/></Link>
                    <Link to="listas"><img src={favorito} alt='imagem de estrela'/></Link>
                    <Link to="config"><img src={config} alt='imagem de uma engrenagem'/></Link>
                </li>
            </ul>
            </nav>   
            <img className={S.logo} src={natal} alt="Imgem do logo de natal" />     
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>} />
        </Routes>
    </BrowserRouter>
    )
  };