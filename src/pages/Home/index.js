import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { useFetch } from '../../hooks/useFetch';
import logoKapt from '../../assets/img/logo-kapt.svg';
import logoErg from '../../assets/img/logo-erg.svg';
import Eye from '../../assets/icons/eye.svg';
import EcoImg from '../../assets/img/bg-eco.jpg';

const Home = () => {
  const { articles } = useFetch();

  return (
    <>
      <main>
        <header className="header">
          <nav className="header__navigation">
            <Link to="/">
              <img src={logoKapt} alt="Kapital" />
            </Link>
            <Link to="/">
              <img src={logoErg} alt="Erg" />
            </Link>
          </nav>
          <div className="container">
            <div className="header__circle">
              <div className="header__circe-wrapper">
                <svg
                  className="header__circle-icon"
                  width="24"
                  height="48"
                  viewBox="0 0 24 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path d="M12.5 3V44.5M12.5 44.5L19 38M12.5 44.5L6 38" stroke="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="48"
                        height="24"
                        fill="white"
                        transform="translate(0 48) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>узнать больше</span>
              </div>
            </div>
            <div className="header__text-block">
              <div className="header__title">
                <Fade left>
                  <h1 className="header__title title">Eurasian Resources Group</h1>
                </Fade>
                <p className="header__descr">Обеспечиваем процветание тех, кто на нас полагается</p>
              </div>
              <div className="header__wrapper">
                <div className="header__aside-block">
                  <h2 className="header__aside-title">Активность роста в финансовой сфере</h2>
                  <p className="header__aside-descr">
                    Товарищи! постоянный количественный рост и сфера нашей активности в значительной
                    степени обуславливает.
                  </p>
                  <button className="header__button button">
                    читать дальше
                    <svg
                      className="button__arrow-icon"
                      width="37"
                      height="15"
                      viewBox="0 0 37 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 8H35.5M35.5 8L32 4.5M35.5 8L32 11.5" stroke="#fff" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="article container">
          <h2 className="title">Материалы</h2>
          <div className="article__wrapper">
            {articles.slice(1, 4).map((article) => {
              return (
                <Zoom key={article.id}>
                  <div className="article__item">
                    <div>
                      <img
                        src={article.photo.default}
                        alt="фото материала"
                        className="article__image"
                      />
                    </div>
                    <div className="article__container-block">
                      <div>
                        <div className="article__category">{article.category.name}</div>
                        <div>
                          <h3 className="article__item-title">{article.title}</h3>
                        </div>
                        <div className="article__subtitle">{article.subtitle}</div>
                      </div>
                      <div>
                        <div className="article__block-count">
                          <span className="article__time">{article.created_at}</span>
                          <span className="article__count-view">
                            <img src={Eye} alt="кол-во просмотров" />
                            {article.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Zoom>
              );
            })}
          </div>
          <div className="article__eco">
            <div className="article__eco-item">
              <h2 className="article__eco-title">Экологические инициативы</h2>
              <button className="article__button button">
                Узнать больше
                <svg
                  className="button__arrow-icon"
                  width="37"
                  height="15"
                  viewBox="0 0 37 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 8H35.5M35.5 8L32 4.5M35.5 8L32 11.5" stroke="#000" />
                </svg>
              </button>
            </div>
            <div className="article__eco-wrapper">
              <img src={EcoImg} className="article__eco-img" alt="просмотров" />
            </div>
          </div>
        </section>
        <section className="data">
          <div className="container">
            <h2 className="title">Наш вклад в развитие Казахстана</h2>
          </div>
          <div className="data__columns chars-container">
            <div className="data__item">
              <div className="data__title">
                <p>Увеличение энергетических мощностей</p>
              </div>
              <div className="data__chart-wrapper">
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">251</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">
                      Восстановление блока №2 Аксуской ЭС
                    </span>
                  </div>
                </div>
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">276</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">Реконструкция энергоблока №6</span>
                  </div>
                </div>
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">6,3</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">
                      Организация производства электро-технологического комплекса
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="data__item">
              <div className="data__title">
                <p>Производство алюминия</p>
              </div>
              <div className="data__chart-wrapper">
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">243</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">
                      Вторая очередь строительства электролизного завода
                    </span>
                  </div>
                </div>
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">307</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">
                      Производство обожженых анодов – АО «КЭЗ»
                    </span>
                  </div>
                </div>
              </div>
              <div className="data__item data_item-top">
                <div className="data__title">
                  <p>Угольная промышленность</p>
                </div>
                <div className="data__chart-wrapper">
                  <div className="data__chart-list">
                    <div>
                      <span className="data__chart-cash">$</span>
                      <span className="data__chart-number">85</span>
                      <span className="data__chart-value">млн</span>
                    </div>
                    <div>
                      <span className="data__chart-subtitle">
                        Циклично-поточный вскрышной комплекс
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="data__item">
              <div className="data__title">
                <p>Ферросплавное производство</p>
              </div>
              <div className="data__chart-wrapper">
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">843</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div className="data__chart-subtitle">
                    <span>Строительство ферросплавного завода в г. Актобе</span>
                  </div>
                </div>
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">63</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">
                      Агломерационная фабрика – АксЗФ АО «ТНК «Казхром»
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="data__item">
              <div className="data__title">
                <p>Железорудное и металлопрокатное производство</p>
              </div>
              <div className="data__chart-wrapper">
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">50</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">
                      Строительство технологической секции «№17»
                    </span>
                  </div>
                </div>
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">36</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">
                      Металлопрокатный завод – АО «ССГПО»
                    </span>
                  </div>
                </div>
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">4,4</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">
                      Строительство печей для обжига извести. Проектирование и внедрение линии по
                      измельчению и упаковке извести в п. Кзыл-Жар
                    </span>
                  </div>
                </div>
                <div className="data__chart-list">
                  <div>
                    <span className="data__chart-cash">$</span>
                    <span className="data__chart-number">454</span>
                    <span className="data__chart-value">млн</span>
                  </div>
                  <div>
                    <span className="data__chart-subtitle">
                      Дробильно-обогатительный комплекс высококачественного концентрата ДОФ-2, ММО-4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <span>© 2021 MUSAN GROUP</span>
        <Link to="/">
          <img src={logoErg} alt="Erg" />
        </Link>
      </footer>
    </>
  );
};

export default Home;
