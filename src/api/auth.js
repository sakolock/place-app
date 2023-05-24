const register = async ({username, email, password}) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_PATH}/users`, {
      method: 'POST',
      params: {
        user: {
          username,
          email,
          password
        }
      }
    });
    const data = await res.json();

    return data;
  } catch (e) {

  }
};

const login = async ({email, password}) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_PATH}/users/sign_in`, {
      method: 'POST',
      params: {
        user: {
          email,
          password,
        }
      }
    })
    return await res.json();
  } catch (error) {
    console.error('arg')
  }
};

const logout = async () => {
  // localStorage.removeItem("user");
  try {
    const res = await fetch(`${process.env.REACT_APP_API_PATH}/signout`);
    return await res.json();
  } catch (e) {
    console.error(e);
  }
};

const getCurrentUser = () => {
  // return JSON.parse(localStorage.getItem("user"));
};

export {
  register,
  login,
  logout,
  getCurrentUser,
};
