import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "22a877f7e8mshe8e24d6e87f3fa8p12a672jsnca4832f56f5a",
    },
  });

  return data;
};
