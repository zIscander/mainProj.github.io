import './about.css'
import Substrate from '../substrate/Substrate'
import arrow from '../../img/bg/pppointed.png'

export default function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__inner">
            <Substrate styles={{ paddingInline: '5rem', marginBottom: '5rem' }}>
              <img width={'500'} src={arrow} alt="" className="about__arrow" />
              <div className="about__info">
                <ul className="about__list">
                  <li className="about__list-item"><span className="is-big-darken">2023</span> выход на фриланс биржи</li>
                  <li className="about__list-item"><span className="is-big-darken">2022</span> первые комерческие проекты</li>
                  <li className="about__list-item"><span className="is-big-darken">2021</span> закончил курсы GLO Academy</li>
                  <li className="about__list-item"><span className="is-big-darken">2018</span> начало обучения</li>
                </ul>
              </div>
            </Substrate>
            <div className="about__form"></div>
          </div>
        </div>
      </section>
    </>
  );
}