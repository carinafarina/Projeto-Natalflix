import S from './inicio.module.scss';
import letreiro from '../../assets/section/letreiro.png'
import assistir from '../../assets/section/assistir.png'
import add from '../../assets/section/favoritos.png'
import imagem from '../../assets/section/imagem.png'

export default function Inicio() {
    return (
      <main>
      <section className={S.boxinicial}>
        <div>
          <img className={S.letreiro} src={letreiro} alt="Letreiro origem dos guardioes" />
          <p>1h 37min | Aventura, Animação, Família</p>
          <p>Jack Frost, um garoto que controla o inverno, se junta ao seleto time dos Guardiões Imortais para impedir Breu, o bicho-papão, de transformar todos os sonhos das crianças em pesadelo e usar seus poderes maquiavélicos para governar o mundo.</p>
          <div className={S.buttom}>
            <img src={assistir} alt="botao assistir" />
          <img src={add} alt="botao add favoritos" />
          </div>
        </div>
        <img src={imagem} alt="capa do filme origem dos guardioes" /> 
        
      </section>
      </main>
    );
  }