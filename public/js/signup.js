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
      alert('Failed to sign up.');
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
