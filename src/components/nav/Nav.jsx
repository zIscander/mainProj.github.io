import './nav.css'

function Nav() {
  return (
    <>
      <nav>
        <div className="row">
          {/* <Logo /> */}
          {/* <Button></Button> */}
          {/* <Socials /> */}
        </div>
        <div className="row">
          <ul className="nav__list list">
            <li className="nav__item"><a href="#" className="nav__link">Обо</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Карьера</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Стек</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Портфолио</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Контакты</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}


export default Nav;