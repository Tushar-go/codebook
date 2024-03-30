import axios from "axios";

export const loginService = async (userData) => {
  const response = await axios.post('/api/auth/login', {
    // email, password
    ...userData,
  });

  if (response.status === 200 || response.status === 201) {
    const { encodedToken, foundUser } = response.data;

    return {
      user: foundUser,
      token: encodedToken,
    };
  }
};


export const signupService = async (userData) => {
  const response = await axios.post('/api/auth/signup', {
    // email, password, firstName, lastName
    ...userData,
  });

  if (response.status === 200 || response.status === 201) {
    const { encodedToken, createdUser } = response.data;

    return {
      user: createdUser,
      token: encodedToken,
    };
  }
};
