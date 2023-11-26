const register = () => {

}

const login = () => {

}

const logout = () => {
  fetch('/auth/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(res => {
      if (res.statusCode == 200) {
        alert('Logout success');
        window.location.reload();
      } else {
        alert('Logout fail');
      }
    })
    .catch(err => console.log(err));
}

const authCtl = {
  register,
  login,
  logout,
}

export default authCtl;
