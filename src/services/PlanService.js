import axios from 'axios';
import { apiURL } from '../config/Config';

export const fetchPlanData = async (token) => {
  const storedPlanData = sessionStorage.getItem('planData');
  
  if (storedPlanData) {
    // If data is present in sessionStorage, return it
    return JSON.parse(storedPlanData);
  } else {
    // If data is not present, fetch from the API
    try {
      const response = await axios.get(apiURL + '/front/customer/plan', {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      });
      const planData = response.data.data;
      // Store the plan data in sessionStorage for future use
      sessionStorage.setItem('planData', JSON.stringify(planData));
      return planData;
    } catch (error) {
      console.error('Error fetching plan data:', error);
      throw error; // Propagate the error if needed
    }
  }
};