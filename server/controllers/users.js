import { fetchUserData } from "../services/users.js";

export const getUserData = async (req, res) => {
  try {
    const user_res = await fetchUserData();
    res.status(200).json({ userDetails: user_res.data || [] });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
