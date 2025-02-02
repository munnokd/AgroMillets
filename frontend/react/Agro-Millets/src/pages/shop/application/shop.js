import axios from "axios";
import { API_URL } from "../../../constants";
import { toast } from "react-toastify";

export default async function getAll() {
  var res = await axios.get(API_URL + "/list/getAll");

  console.log(res);
  return res.data.data;
}

export async function getItem(id) {
  var res = await axios.get(API_URL + "/list/getItem/" + id);
  console.log(res);
  return res.data.data;
}

export async function addComment(comment) {
  console.log(comment, appState.getUserData());
  if (!appState.isLoggedIn()) {
    toast.error("You must be logged in to add a comment");
    return 0;
  }
  var res = await axios.post(API_URL + "/list/comment", {
    commentBy: appState.getUserData()._id,
    itemID: comment.itemID,
    name: appState.getUserData().name,
    content: comment.comment,
    commentAt: Date.now(),
  });

  console.log(res);
  return 1;
}
