import axios from "axios";
import { API_URL } from "../../../constants";
import { toast } from "react-toastify";
import appState from "../../../data/AppState";

// Gets user cart
export default async function getCart() {
  if (!appState.isUserLoggedIn()) {
    toast.error("You must be logged in to view your cart");
    return null;
  }

  var id = appState.userData._id;
  var res = await axios.get(API_URL + `/cart/get/${id}`);

  console.log(res);
  return res.data.data.items;
}

// Gets millet item
export async function getItem(id) {
  var res = await axios.get(API_URL + "/list/getItem/" + id);
  console.log(res);
  return res.data.data;
}

// Adds item to cart
export async function addToCart(itemId, count) {
  if (!appState.isUserLoggedIn()) {
    toast.error("You must be logged in to add item to cart");
    return 0;
  }

  var res = await axios.post(API_URL + "/cart/add", {
    userId: appState.userData._id,
    item: itemId,
    count: count,
  });

  console.log(res);
  return 1;
}
