import axios from "axios";


export default {
  searchGames: function(query) {
    return axios.get(
      `https://api.boardgameatlas.com/api/search?name=${query.search}&client_id=lYQ1XF3ZEb`
    );
  }
};