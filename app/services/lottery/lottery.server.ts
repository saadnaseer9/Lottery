import { endpoints } from "../endpoints/apiConfig";

export const getLotteryCosmic = async () => {
    try {
      const response = await fetch(endpoints.lottery.getLotteryCosmic);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching lottery cosmic data:', error);
      return null;
    }
  };