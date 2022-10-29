import Sprite from '../../images/icons/icons-social.svg';
import styles from './Contacts.module.css';

import Natasha from '../../images/team/Natasha.png';
import Serhii from '../../images/team/Serhii.jpg';
import Ira from '../../images/team/Ira.jpg';
import Vova from '../../images/team/Vova.jpg';
import Roma from '../../images/team/Roma.jpg';
import Serhii_O from '../../images/team/Serhii_O.jpg';
import Sanya from '../../images/team/Sanya.jpg';


const Contacts = () => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Our team</h1>
          <p><hr className={styles.line}/></p>
{/* Natasha */}
          <ul className={styles.card__wrapper}>
            <li > 
            <div className={styles.card}>
            <img
                  src={Natasha}
                  alt="1"
                  className={styles.img}
                  width="280"
                  height="244"
                />

              <div className={styles.team__about}>
                <h3 className={styles.member__title}>Natasha</h3>
                <p className={styles.role__text}>Team Lead</p>

                <ul className={styles.social__list}>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://github.com/Tasha1003Natasha"
                      target="blank"
                    >                          
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-github-1`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://www.linkedin.com/in/tasha-natasha-0ba490245/"
                      target="blank"
                    >
                      
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-linkedin-1`}></use>
                      </svg>
                    </a>
                  </li>                      
                  
                </ul>
              </div>
            </div>

              
            </li>
          
{/* Serhii */}
          
            <li > 
            <div className={styles.card}>
            <img
                  src={Serhii}
                  alt="1"
                  className={styles.img}
                  width="280"
                  height="244"
                />

              <div className={styles.team__about}>
                <h3 className={styles.member__title}>Serhii</h3>
                <p className={styles.role__text}>Scrum Master</p>

                <ul className={styles.social__list}>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://github.com/serg-itsh"
                      target="blank"
                    >                          
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-github-1`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://www.linkedin.com/in/serhii-shevchenko-9889a3244/"
                      target="blank"
                    >
                      
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-linkedin-1`}></use>
                      </svg>
                    </a>
                  </li>                      
                  
                </ul>
              </div>
            </div>

             
            </li>
          
{/* Ira */}
          
            <li >
            <div className={styles.card}>
            <img
                  src={Ira}
                  alt="1"
                  className={styles.img}
                  width="280"
                  height="244"
                />

              <div className={styles.team__about}>
                <h3 className={styles.member__title}>Iryna</h3>
                <p className={styles.role__text}>Developer</p>

                <ul className={styles.social__list}>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://github.com/IrynaSabinina"
                      target="blank"
                    >                          
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-github-1`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://www.linkedin.com/in/iryna-sabinina-7620a5244/"
                      target="blank"
                    >
                      
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-linkedin-1`}></use>
                      </svg>
                    </a>
                  </li>                      
                  
                </ul>
              </div>
            </div> 

            
            </li>
          
{/* Vova */}
          
            <li > 
            <div className={styles.card}>
            <img
                  src={Vova}
                  alt="1"
                  className={styles.img}
                  width="280"
                  height="244"
                />

              <div className={styles.team__about}>
                <h3 className={styles.member__title}>Volodymyr</h3>
                <p className={styles.role__text}>Developer</p>

                <ul className={styles.social__list}>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://github.com/Mr-Nihility"
                      target="blank"
                    >                          
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-github-1`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://www.linkedin.com/in/volodymyr-romanenko-b0b15b243/"
                      target="blank"
                    >
                      
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-linkedin-1`}></use>
                      </svg>
                    </a>
                  </li>                      
                  
                </ul>
              </div>
            </div>

              
            </li>
          
{/* Roma */}
          
            <li > 
            <div className={styles.card}>
            <img
                  src={Roma}
                  alt="1"
                  className={styles.img}
                  width="280"
                  height="244"
                />

              <div className={styles.team__about}>
                <h3 className={styles.member__title}>Roman</h3>
                <p className={styles.role__text}>Developer</p>

                <ul className={styles.social__list}>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://github.com/RoRomario360"
                      target="blank"
                    >                          
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-github-1`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://www.linkedin.com/in/roman-merkulov-857041241/"
                      target="blank"
                    >
                      
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-linkedin-1`}></use>
                      </svg>
                    </a>
                  </li>                      
                  
                </ul>
              </div>
            </div>

              
            </li>
          
{/* Serhii_O*/}
          
            <li > 
            <div className={styles.card}>
            <img
                  src={Serhii_O}
                  alt="1"
                  className={styles.img}
                  width="280"
                  height="244"
                />

              <div className={styles.team__about}>
                <h3 className={styles.member__title}>Serhii</h3>
                <p className={styles.role__text}>Developer</p>

                <ul className={styles.social__list}>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://github.com/SergeyOstapenko"
                      target="blank"
                    >                          
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-github-1`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://www.linkedin.com/in/sergey-ostapenko-26a1a997/"
                      target="blank"
                    >
                      
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-linkedin-1`}></use>
                      </svg>
                    </a>
                  </li>                      
                  
                </ul>
              </div>
            </div>

              
            </li>
         
{/* Sanya */}
         
            <li >
              <div className={styles.card}>
              <img
                  src={Sanya}
                  alt="1"
                  className={styles.img}
                  width="280"
                  height="244"
                />

              <div className={styles.team__about}>
                <h3 className={styles.member__title}>Alexandr</h3>
                <p className={styles.role__text}>Developer</p>

                <ul className={styles.social__list}>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://github.com/Sinbew"
                      target="blank"
                    >                          
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-github-1`}></use>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.list__item}>
                    <a
                      className={styles.social__link}
                      href="https://www.linkedin.com/in/alexandr-raskulov/"
                      target="blank"
                    >
                      
                      <svg className={styles.arrowIcon} width={24} height={24}>
                        <use href={`${Sprite}#icon-linkedin-1`}></use>
                      </svg>
                    </a>
                  </li>                      
                  
                </ul>
              </div>
              </div> 

             
            </li>
          </ul>

          

        </div>
      </section>
    </main>
  );
};

export default Contacts;
