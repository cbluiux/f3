import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [details, setDetails] = useState({});
  const [detailError, setDetailError] = useState('');

  const detailAPI = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setDetails(response.data);
    } catch (e) {
      setDetailError('Something went wrong while loading details...');
    }
  };

  return [detailAPI, details, detailError];
};
