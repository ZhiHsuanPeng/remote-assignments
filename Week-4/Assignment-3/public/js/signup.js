import axios from "axios";

export const signup = async (email, password) => {
  try {
    const response = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/api/v1/users/signup",
      data: {
        email: email,
        password: password,
      },
    });
    alert(response.data.message);
    window.setTimeout(() => {
      location.assign("/member");
    }, 1000);
  } catch (err) {
    alert(err.response.data.message);
  }
};
