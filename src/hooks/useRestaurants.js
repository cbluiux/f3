import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import * as Location from 'expo-location';

export default () => {
  const [error, setError] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [location, setLocation] = useState();

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          latitude: location.coords.latitude * 1,
          longitude: location.coords.longitude * 1,
        },
      });

      setRestaurants(response.data.businesses);
      setError('');
    } catch (e) {
      setError('Something went wrong...');
    }
  };

  useEffect(() => {
    const getLocationPermissions = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied');
          return;
        }
        let currLocation = await Location.getCurrentPositionAsync({});
        setLocation(currLocation);
      } catch (error) {
        console.error(error);
      }
    };

    getLocationPermissions();
  }, []);

  useEffect(() => {
    let date = new Date();
    let breakfast = date.getHours() < 11;
    let lunch = date.getHours() > 11 && date.getHours() < 16;

    if (location && breakfast) {
      searchAPI('breakfast');
    } else if (location && lunch) {
      searchAPI('lunch');
    } else {
      searchAPI('dinner');
    }
  }, [location]);

  return [searchAPI, restaurants, error];
};
