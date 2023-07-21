/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Spinner from "../../utils/Spinner";
import { sort } from "../../utils/data";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const Product = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);

  // fetching product from API server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    void fetchProducts();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <section className="mt-5 px-4">
        <div className="md:flex md:justify-between">
          <div className="flex flex-wrap gap-2 md:gap-x-5 md:gap-y-3 md:max-w-[70%]">
            {sort.map((data) => (
              <span
                key={data.title}
                className="bg-gray-100 px-3 py-1 flex items-center capitalize rounded-2xl"
              >
                <p className="text-xs font-medium">{data.title}</p>
                <>{data.icon}</>
              </span>
            ))}
          </div>
          <div className="md:w-[30%]">
            <span className="w-[5.5rem] bg-gray-100 px-3 py-1 mt-2 md:mt-0 flex items-center justify-start md:self-start capitalize rounded-2xl text-xs font-medium">
              <p>Sort by</p>
              <RiArrowDropDownLine className="text-2xl" />
            </span>
          </div>
        </div>
        <div className="mt-6 md:mt-10">
          <p className="font-montserrat text-lg mb-4">Headphones For You!</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((data) => (
              <div key={data.id} className="mx-auto w-[18rem] md:w-[14.5rem] ">
                <div className="bg-white flex justify-center items-center rounded-t-lg relative w-full border border-[#f5f6f6]">
                  <div
                    onClick={() => navigate(`/product/${data.id}`)}
                    className="w-full h-full flex justify-center items-center cursor-pointer"
                  >
                    <img src={data.image} alt="product" className="w-44 h-52" />
                  </div>
                  <span className="absolute top-5 right-5 bg-white w-8 h-8 flex justify-center items-center rounded-full">
                    <AiOutlineHeart className="text-2xl" />
                  </span>
                </div>
                <div className="bg-[#f5f6f6] px-1.5 pb-4 rounded-b-lg">
                  <div className="flex justify-between gap-x-3 font-bold">
                    <p className="md:truncate">{data.title}</p>
                    <p>
                      <sup>$</sup>
                      {data.price}
                      <sup>00</sup>
                    </p>
                  </div>
                  <p className="md:truncate my-1 leading-5">
                    {data.description}
                  </p>
                  <div className="flex gap-x-2 items-center">
                    <span className="flex items-center gap-x-1">
                      <AiFillStar className="text-[#13ad14]" />
                      <p className="text-sm">{data.rating.rate}</p>
                    </span>
                    <p className="text-sm">({data.rating.count})</p>
                  </div>
                  <button className="mt-3 md:mt-5 border border-primary rounded-3xl px-5 py-1.5 text-primary hover:bg-primary hover:text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Product;
