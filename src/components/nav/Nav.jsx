import Button from '../button/Button';
import Logo from '../logo/Logo';
import './nav.css'

function Nav() {
  return (
    <>
      <nav className='nav'>
        <div className="container">

          <div className='row'>
            <Logo />
            {/* <Socials /> */}
            <ul className='nav__list list'>
              <li className='nav__item'><a href='#' className='nav__link'>Обо мне</a></li>
              <li className='nav__item'><a href='#' className='nav__link'>Карьера</a></li>
              <li className='nav__item'><a href='#' className='nav__link'>Стек</a></li>
              <li className='nav__item'><a href='#' className='nav__link'>Портфолио</a></li>
              <li className='nav__item'><a href='#' className='nav__link'>Контакты</a></li>
            </ul>
            <div className="nav__btn-block">
              <Button btnTxt='Консультация' />
              <Button btnTxt='Соц. сети' />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Nav;