import ALL_API_CONST from "./constants";
import axios from "axios";


export const getCustomers = () => {
    const promise = axios.get(ALL_API_CONST.customer, {
      withCredentials: true,
    });
  
    return promise.then((response) => response.data);
  };
  
  export const addCustomer = (data: any) => {
    const promise = axios.post(
        ALL_API_CONST.customer,
      data,
    //   {
    //     withCredentials: true,
    //   }
    );
  
    return promise.then((response) => response.data);
  };