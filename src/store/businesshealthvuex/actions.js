
import axios from 'axios';

export default {
  async savePayload({ commit }, item) {
    try {
      console.log('itemnyaaaaa', item)
      const response = await axios.post('http://192.168.196.30:8880/public/user-business', item)
      console.log('ini response', response);
      commit('setscore', response.data.score); 
      return response.data.score;
    } catch(e) {
      console.log(e)
    }
  },
}

// http://localhost:3000/apibusinesshealth

// http://192.168.196.30:8880/public/user-business