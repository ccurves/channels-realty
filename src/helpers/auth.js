import cookie from "js-cookie";
import ls from "localstorage-slim";

//Set in Cookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      //Expires in 1 Day
      expires: 1,
    });
  }
};

//Remove Cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

//Get from Cookie
export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

//Set in localstorage
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    // localStorage.setItem(key, JSON.stringify(value));
    ls.set(key, value, { encrypt: true });
  }
};

export const getLocalStorage = (key) => {
  if (window !== "undefined") {
    return ls.get(key, { decrypt: true });
  }
};

//Remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

//Auth user afer login
export const authenticate = (response, next) => {
  let data = response.data || response.user;
  setCookie("token", data.token);
  setLocalStorage("user", data.others);
  next();
};

//Signout User
export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
};

//Get user info from localstorage
export const isAuth = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return ls.get("user", { decrypt: true });
      } else {
        return false;
      }
    }
  }
};

//Update user data in localstorage
export const updateUser = (response) => {
  let data = response.data || response.others || response;
  if (window !== "undefined") {
    setLocalStorage("user", data);
    // localStorage.setItem("user", JSON.stringify(auth));
  }
};
