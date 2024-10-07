import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace this with your backend API URL

// Login function
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Signup function
export const signupUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, user);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};
