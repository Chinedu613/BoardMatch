import axios from "axios";


export default {
  searchGames: function(query) {
    return axios.get(
      `https://api.boardgameatlas.com/api/search?name=${query.search}&limit=10&order_by=popularity&client_id=lYQ1XF3ZEb`
    );
  }
};