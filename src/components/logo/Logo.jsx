import logoImg from '../../img/logo/logo03.png'
import './logo.css'

export default function Logo() {
  return (
    <>
      <div className='logo'>
        <a href='#' className='logo__link'>
          <img src={logoImg} alt='' className='logo__img' />
          <span className='logo__txt'>Компилятор Ваших идей</span>
        </a>
      </div>
    </>
  );
}