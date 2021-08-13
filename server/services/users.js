import axios from "axios";

export const fetchUserData = async () => {
  try {
    return await axios.get(`https://jsonplaceholder.typicode.com/users`);
  } catch (error) {
    console.log(error);
    return error;
  }
};
