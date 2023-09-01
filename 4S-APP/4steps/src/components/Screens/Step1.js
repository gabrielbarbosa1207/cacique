import React from 'react';
import './Step1.css';
import '../../utils/step1-script'
function Step1() {
    return (
        <div className="step1-container">
            <section id="menu-bar">
                <div className="menu">
                    <img src="images/logo__betanoaab77939bc7135338ae15e588b73465f.svg" alt="Logo" id="img-logo" />
                </div>
            </section>

            <div id="page-content">
                <section>
                    <div className="cta">
                        <h1>
                            GANHE UM <span className="highlight-text">SUPER PRÊMIO</span> EM QUATRO
                            PASSOS! <span className="highlight-text">GIRE PARA GANHAR!</span>
                        </h1>
                    </div>

                    <div className="roulette">
                        <img src="images/Iluminação-min.webp" alt="Illumination" id="roleta1" />
                        <div id="roleta2">
                            <img src="images/ROLETA.webp" alt="Roulette" className="spinner runSpin" />
                        </div>
                        <img src="images/button-gire.webp" alt="Spin Button" id="roleta3" className="runSpin" />
                    </div>

                    <div className="button-roulette">
                        <button id="button-cta" className="runSpin">
                            GIRE PARA GANHAR
                        </button>
                    </div>
                </section>
            </div>

            <div id="people" className="people">
                <img src="images/icons8-dinheiro-96.png" alt="Money Icon" />
                <p id="people-p">João Silva acabou de ganhar R$25</p>
            </div>

            <div class="steps-3">
    <div class="steps">
      <div class="step">
        <div class="step-loaded step1"></div>
        <p>1</p>
      </div>
      <div class="bar">
        <div class="bar-loaded step1"></div>
      </div>
      <div class="step">
        <div class="step-loaded step2"></div>
        <p>2</p>
      </div>
      <div class="bar">
        <div class="bar-loaded step2"></div>
      </div>
      <div class="step">
        <div class="step-loaded step3"></div>
        <p>3</p>
      </div>
      <div class="bar">
        <div class="bar-loaded step3"></div>
      </div>
      <div class="step">
        <div class="step-loaded step4"></div>
        <p>4</p>
      </div>
    </div>

                <div className="steps-h">
                    <span>GIRE</span>
                    <span>Preencha</span>
                    <span>Cadastre</span>
                    <span>Verifique seu email</span>
                </div>
            </div>

            <div className="_form_36" id="_form_36"></div>
            
            {/* For third-party scripts, it's recommended to integrate them in React using useEffect or other means. */}

            <div className="privacy-terms">
                <p>Privacidade | Termos de uso</p>
                <p>Todos os direitos reservados.</p>
            </div>
        </div>
    );
}

export default Step1;
