import axios from "axios";

const api_key = "3O2dj0jG28NBAn5np2FlcWB1x7Pu0aNv";
export default axios.create({
  baseURL: `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=`
});
