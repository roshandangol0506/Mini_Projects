import axios from "axios";

class Post {
  getPosts() {
    return axios.get("http://localhost:8001/allteams"); // Ensure it returns full response
  }
}

export default new Post();
