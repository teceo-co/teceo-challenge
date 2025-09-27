import { api } from '../../../config/config';

const homeRepository = () => {
  const getProductColors = () => {
    return api.get('/product-colors', {
      params: {
        limit: 10,
        skip: 0,
      },
    });
  };

  return {
    getProductColors,
  };
};

export default homeRepository;
