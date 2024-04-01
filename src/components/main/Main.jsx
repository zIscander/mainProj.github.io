import Nav from "../nav/Nav";
import Substrate from "../substrate/Substrate";
import './main.css'


const mainTitleInner = 'Привет! Я Александр Шмик, веб разработчик!'

export default function Main() {
  
  return (
    <>
      <section className="main">
        <Nav />
        <div className="container">
          <Substrate>
            <h1 className="main__title">
              {mainTitleInner}
            </h1>
          </Substrate>
        </div>
      </section>
    </>
  );
}
