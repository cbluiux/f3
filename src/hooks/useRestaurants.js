import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: { limit: 50, term: searchTerm, location: 'Boulder' },
      });

      setRestaurants(response.data.businesses);
    } catch (e) {
      setError('Something went wrong...');
    }
  };

  useEffect(() => {
    searchAPI('breakfast');
  }, []);

  return [searchAPI, restaurants, error];
};
