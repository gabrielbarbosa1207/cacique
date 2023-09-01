/* eslint-disable linebreak-style */
const targetUrlEnv = 'https://www.presentebtn.com/bonus4/pagina-obrigado/';
const acTagEnv = 'betano-bonus4';

const animateSpin = () => {
  const roleta2 = document.querySelector('#roleta2');
  roleta2.classList.remove('spinner');
  roleta2.classList.add('wheel__spinner_animated-1');

  setTimeout(() => {
    roleta2.classList.remove('wheel__spinner_animated-1');
    document.querySelector('#page-content').classList.add('page-content');
  }, 4000);
};

const animateSteps = (number) => {
  const stepLoaded = document.querySelector(`.step-loaded.step${number}`);
  const barLoaded = document.querySelector(`.bar-loaded.step${number}`);

  stepLoaded.classList.add('loaded');
  setTimeout(() => {
    barLoaded.classList.add('loaded');
  }, 700);
};

const addSpinAnimation = (element) => {
  element.addEventListener('click', () => {
    animateSpin();
    animateSteps(1);
  });
};
document.querySelectorAll('.runSpin').forEach(addSpinAnimation);

// Run after DOM is ready
(() => {
  // Active Campaign - Style
  // document.querySelector('._form_36 > form').removeAttribute('id'); // Remove ID
  document.querySelector('._form_36 > form').classList.add('hide-me'); // Add Class
  document.getElementById('_form_36_submit').disabled = true; // Submit Disabled
  document.getElementById('_form_36_submit').classList.add('hide-me'); // Submit Hidden
  // Title
  document.querySelector('div._form_element._x52788535._full_width._clear > div').innerHTML = 'PARABÉNS JOGADOR! VOCÊ GANHOU R$300,00 EM BÔNUS!';
  // Hidden Inputs
  document.querySelector('div._form-content > div._form_element._x90837047._full_width').classList.add('hide-me');
  document.querySelector('div._form-content > div._form_element._x73138634._full_width').classList.add('hide-me');

  document.getElementById('field[48]').value = '';
  document.getElementById('field[49]').value = '';

  // Ac Form
  const acForm = document.querySelector('._form_36 > form');

  // Custom Submit
  const btn = document.createElement('button');
  btn.innerHTML = 'Enviar';
  btn.type = 'button';
  btn.className = 'btn btn-success btn-lg';
  btn.style.cssText = 'width: 100%;';
  btn.id = 'customSubmit';

  const formContainer = document.querySelector('._form_36 > form > div._form-content');
  if (formContainer) {
    formContainer.appendChild(btn);
  }

  // Custom Submit Event
  document.getElementById('customSubmit').onclick = () => {
    // target
    const currentPageUrl = new URL(window.location);
    const currentPageQueryParams = Object.fromEntries(currentPageUrl.searchParams);

    const targetUrl = new URL(targetUrlEnv);
    const targetQueryParams = Object.fromEntries(targetUrl.searchParams);

    const mergedQueryParams = Object.assign(targetQueryParams, currentPageQueryParams);
    mergedQueryParams.afp = document.getElementById('email').value || '';
    mergedQueryParams.afp1 = mergedQueryParams.fbclid || '';
    mergedQueryParams.afp2 = document.getElementById('phone').value || '';
    // mergedQueryParams.afp3 = mergedQueryParams.event || '';
    mergedQueryParams.afp4 = document.getElementById('fullname').value || '';
    mergedQueryParams.afp5 = mergedQueryParams.jtm || '';
    mergedQueryParams.c = mergedQueryParams.jtm || '';

    targetUrl.search = new URLSearchParams(mergedQueryParams);

    // Active Campaign - Fields
    document.getElementById('field[48]').value = targetUrl.href.replace(/https?:\/\//i, '');
    document.getElementById('field[49]').value = acTagEnv;
    document.getElementById('customSubmit').disabled = true; // Submit Disabled
    acForm.requestSubmit();

    setTimeout(() => {
      document.getElementById('customSubmit').disabled = false; // Enabled
    }, 2500);
  };
})();