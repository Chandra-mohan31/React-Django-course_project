import { API } from "../../backend";

export const getProducts = () => {
  return fetch(`${API}product`, { method: "GET",mode:"no-cors" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
