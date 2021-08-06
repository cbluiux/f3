import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer lyMixlT0oZ-qjx16c6BHPD5L6kjHU6rTSb2o4BRhacivsEZ2ftKHK9U_OWsqq5edOWCgZa5isigJwTnmy06UvSIWCvAMOX6OMYq00_A6NjtjwCs5d3-8cTYGGK8MYXYx',
  },
});
