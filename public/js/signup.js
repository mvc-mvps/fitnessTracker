//handles the sign up data to create a new user
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      document.getElementById('formValidation').innerHTML = `
    <div class="alert alert-danger" role="alert">Invalid username or password. Make sure your password is between 8 and 16 characters. If your password is the correct length, please choose a different username.</div>`
    }
  }
  if (username === "" || password === "") {
    document.getElementById('formValidation').innerHTML = `
    <div class="alert alert-danger" role="alert">Enter a username and password.</div>`;
}
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
