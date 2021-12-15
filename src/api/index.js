import axios from "axios";
import { getToken, storeToken, storeUser } from "../auth";
const BASE = "http://localhost:5000/api";
// this is an example for an api call with axios
export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username: username,
      password: password,
    });
    storeToken(data.token);
    storeUser(data.user.username);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username: username,
      password: password,
    });
    console.log(data);
    storeToken(data.token);
    storeUser(data.user.username);
    console.log(data.token);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getAllProducts() {
  console.log('get All prod /api/index')
  try {
    const { data } = await axios.get(`${BASE}/products`);
    return data;
  } catch (error) {
    console.log('error in get all prod', error)
    throw error;
  }
}

export async function getSingleProduct(id) {
  console.log('get single prod api/index', id)
  try {
    const { data } = await axios.get(`${BASE}/products/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}






// const data = [
//   {
//     id: 1,
//     author: "kyle",
//     name: "St. Michael",
//     price: "10.00",
//     current_owner: "Auriel",
//     image_url:
//       "https://avatars2.githubusercontent.com/u/29058777?s=460&v=4",
//     for_sale: true,
//     description: "A example of st. michael",
//     user_chain: [
//       {
//         hash: "1",
//         previous_hash: "0",
//         price: "10.00",
//       },
//     ],
//   },
//   {
//     id: 2,
//     author: "friendlyArtist42",
//     name: "St. Jude",
//     price: "99.00",
//     current_owner: "Milk",
//     image_url:
//       "https://avatars2.githubusercontent.com/u/29058777?s=460&v=4",
//     for_sale: true,
//     buyout_price: "99.00", //set by owner/seller
//     description: "A example of St. Jude",
//     user_chain: [
//       {
//         hash: "2",
//         previous_hash: "1",
//         price: "99.00",
//       },
//     ],
//   },
// ]