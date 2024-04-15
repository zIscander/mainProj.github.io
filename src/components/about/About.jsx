import './about.css'
import Substrate from '../substrate/Substrate'

export default function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__inner">
            {/* <Substrate styles={{ paddingInline: '5rem', marginBottom: '5rem', width: 'fit-content' }}> */}
              <div className="about__info">
                <ul className="about__list">
                  <li className="about__list-item"><span className="is-big-darken">2018</span>Начало обучения</li>
                  <li className="about__list-item"><span className="is-big-darken">2021</span>Закончил курсы GLO Academy</li>
                  <li className="about__list-item"><span className="is-big-darken">2022</span>Первые комерческие проекты</li>
                  <li className="about__list-item"><span className="is-big-darken">2023</span>Выход на фриланс биржи</li>
                  <li className="about__list-item"><span className="is-big-darken">2024</span> Продолжение обучения...</li>
                </ul>
              </div>
            {/* </Substrate> */}
          </div>
        </div>
      </section>
    </>
  );
}