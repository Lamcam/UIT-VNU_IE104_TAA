export const handleLoginSubmit = () => {
  const submitBtn = $('#modal--login [type="submit"]');
  console.log(submitBtn);
  if (submitBtn.length == 0) {
    alert('Don\'t have this button', '#modal--login [type="submit"]');
  } else {
    submitBtn.on('click', (e) => {
      e.preventDefault();
      const phone = $('#modal--login [name="phone"]').val().trim();
      const pass = $('#modal--login [name="pass"]').val().trim();

      if (!phone || !pass) {
        alert('Please enter all fields');
      } else {
        const data = {
          phone,
          pass
        }

        fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          redirect: 'follow'
        }).then(res => res.json())
          .then(res => {
            if (res.statusCode == 200) {
              alert('Login success');
              window.location.href = '/';
            } else {
              alert('Login fail');
            }
          })
          .catch(err => console.log(err));
      }
    });
  }
};