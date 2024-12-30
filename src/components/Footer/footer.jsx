import filme1 from '../../assets/footer/filme1.png';
import esqueceram from '../../assets/footer/esqueceram.png';
import grinch from '../../assets/footer/grinch.png';
import filme4 from '../../assets/footer/filme4.png';
import filme5 from '../../assets/footer/filme5.png';
import S from './footer.module.scss';



export default function footer() {
    return (
      <section>
        <p>Continuar Assistindo</p>
        <div className={S.imgfooter}>
        <img src={filme1} alt="" />
        <img src={esqueceram} alt="" />
        <img src={grinch} alt="" />
        <img src={filme4} alt="" />
        <img className={S.filme5} src={filme5} alt="" />
        <p>Filmes de Terror no Natal</p>
        </div>
        
      </section>
    );
  }