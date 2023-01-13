const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

document.getElementById('logout').addEventListener('click', function() {
  logout();
});

