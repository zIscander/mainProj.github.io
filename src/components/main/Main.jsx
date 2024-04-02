import Nav from "../nav/Nav";
import Substrate from "../substrate/Substrate";
import styles from "./mainSubtitle.module.css";
import './main.css';

const mainTitleInner = 'Привет! Я Александр Шмик веб-разработчик!';
const mainSubtitleInner = 'Создаю сайты для малого и среднего бизнеса, фрилансеров, креативных людей и всех, кто хочет представить себя и свои услуги в интернете.'

const mainTitleStyle = {
  marginInline: 'auto',
  marginTop: '4rem'
}
const mainSubtitleStyle = styles.mainSubtitle


export default function Main() {

  return (
    <>
      <section className="main">
        <Nav />
        <div className="container">
          <Substrate styles={mainTitleStyle}>
            <h1 className="main__title">
              {mainTitleInner}
            </h1>
          </Substrate>
          <Substrate addClass={mainSubtitleStyle}>
            <h2 className="main__sub-title">
              {mainSubtitleInner}
            </h2>
          </Substrate>
        </div>
      </section>
    </>
  );
}
