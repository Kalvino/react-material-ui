import axios from 'axios';

const axiosInst =  axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json' }
})

// Add a request interceptor
axiosInst.interceptors.request.use(
  (req) => {
    const user = localStorage.getItem('user')

    if(user){      
      req.headers.authorization = `Bearer ${JSON.parse(user).authToken}`;
    }
    
    return req;
},(error) => {
  // Do something with request error
  console.log(error);
  return Promise.reject(error);
});

// Add a response interceptor
axiosInst.interceptors.response.use(
  (response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
},(error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  if (!error.response) {
    return Promise.reject(error.message)
  }

  let errors = error.response.data.errors
  return Promise.reject(errors);
});

export default axiosInst;