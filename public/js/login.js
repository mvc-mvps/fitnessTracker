const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      document.getElementById('formValidation').innerHTML = `
      <div class="alert alert-danger" role="alert">Incorrect username or password. Please sign up if you are a new user.</div>`
    }
  }
  if (username === "" || password === "") {
    document.getElementById('formValidation').innerHTML = `
    <div class="alert alert-danger" role="alert">Enter a username and password.</div>`;
}
};
document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);
