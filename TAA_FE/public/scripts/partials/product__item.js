const productHeartEffect = (event) => {
  const target = event?.target;
  if (!target) {
    console.error('No target');
    return;
  }
  
  if (!target.classList.contains('icon_heart')) {
    console.error('Not icon_heart');
    return;
  }

  if (target.classList.contains('icon--filled')) {
    target.classList.remove('icon--filled');
    target.innerText = 'heart_plus';
  } else {
    target.classList.add('icon--filled');
    target.innerText = 'favorite';
  }
}