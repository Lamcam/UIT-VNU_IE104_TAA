
// Function to create a cookie
const createCookie = (name, value, minutes) => {
  let expires = "";
  // console.log(document.cookie);
  if (minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${encodeURIComponent(name)}=${value}${expires}; path=/`;
}

// Function to read a cookie
const readCookie = (name) => {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
    }
  }
  return null;
}

// Function to update a cookie
const updateCookie = (name, value, days) => {
  deleteCookie(name);
  createCookie(name, value, days);
}

// Function to delete a cookie
const deleteCookie = (name) => {
  createCookie(name, "", -1);
}

export default {
  createCookie,
  readCookie,
  updateCookie,
  deleteCookie
};

