const visibilityPass = (event) => {
  // console.log(event)
  const span = event?.target;
  // console.log(btn);

  const password__wrapper = span.parentNode.parentNode;
  const input = password__wrapper.querySelector('.password__input');
  // console.log('visibilityPass: ', btn.parentNode);

  if (input?.type === 'password') {
    input.type = 'text';
    span.textContent = 'visibility';
    span.classList.add('icon--filled')
  } else {
    input.type = 'password';
    span.textContent = 'visibility_off';
    span.classList.remove('icon--filled')
  }
}

const formCtl = {
  visibilityPass,
}

export default formCtl;