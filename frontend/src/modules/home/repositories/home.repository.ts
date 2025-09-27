import axios from 'axios';

const homeRepository = () => {
  const getProductColors = () => {
    return axios.get('/product-colors');
  };

  return {
    getProductColors,
  };
};

export default homeRepository;
