/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-async-promise-executor */
/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import { ProductInterface } from "../interfaces";

export const GetAllProducts = () => {
  return new Promise<ProductInterface[]>(async (resolve, reject) => {
    try {
      const response = await axios.get<ProductInterface[]>(
        "https://fakestoreapi.com/products"
      );
      const result = response.data;
      resolve(result);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const GetSingleProduct = (id: number) => {
  return new Promise<ProductInterface>(async (resolve, reject) => {
    try {
      const response = await axios.get<ProductInterface>(
        `https://fakestoreapi.com/products/${id}`
      );
      const result = response.data;
      resolve(result);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
