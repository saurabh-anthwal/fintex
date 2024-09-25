import axios, { AxiosResponse } from 'axios';

// Define the base URL for your API
const BASEURL = process.env.NEXT_PUBLIC_API_URL;

// Define interfaces for the data types
interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

// Create an Axios instance for default settings
const apiClient = axios.create({
  baseURL: `${BASEURL}`, 
  headers: {
    "Content-Type": "application/json;charset=utf-8", 
  },
});

const AuthService = {
  register: async (userData: RegisterData): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await apiClient.post('/register', userData);
      return response.data;
    } catch (error: any) {
      console.error("Registration Error:", error.response || error.message);
      throw error.response ? error.response.data : new Error('Server Error');
    }
  },

  login: async (userData: LoginData): Promise<any> => {
    try {
      
      // Send a POST request to the login API
      const response: AxiosResponse<any> = await apiClient.post('/login', userData);
      
      const { access_token, token_type } = response.data;
  
      // Save the access token in localStorage
      if (access_token) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('access_token', access_token); // Store token
        }
      }
  
      return response.data;
    } catch (error: any) {
      console.error("login Error:", error.response || error.message);
      throw error.response ? error.response.data : new Error('Server Error');
    }
  },
  

};

export default AuthService;




