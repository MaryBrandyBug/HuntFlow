const registrationForm = document.forms.regForm;

registrationForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const obj = Object.fromEntries(new FormData(registrationForm));
  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  console.log(response.status);
  if (response.status === 200) {
    window.location.href = '/';
  } else if (response.status === 403) {
    registrationForm.reset();
    const span = document.createElement('span');
    span.innerHTML = 'Ошибка регистрации';
    span.style.color = '#D5DBDB';
    const regButton = document.querySelector('#Section2');
    regButton.appendChild(span);
  }
});

const signInForm = document.forms.enterForm;
signInForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const obj = Object.fromEntries(new FormData(signInForm));
  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  if (response.status === 200) {
    window.location.href = '/';
  } else if (response.status === 403) {
    signInForm.reset();
    const span = document.createElement('span');
    span.innerHTML = 'Ошибка входа';
    span.style.color = '#D5DBDB';
    const errorPlace = document.querySelector('#Section1');
    errorPlace.appendChild(span);
  }
});
