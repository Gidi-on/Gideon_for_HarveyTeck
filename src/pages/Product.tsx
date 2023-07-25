/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Suspense, useEffect, useState } from "react";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { MdListAlt } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";
import { GetSingleProduct } from "../api";
import Button from "../components/Button";
import { ProductInterface } from "../interfaces";
import Spinner from "../utils/Spinner";

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(11);
  const { id } = useParams();

  // handling adding items
  const handlePlus = () => {
    if (count === 11) {
      setCount(11);
    } else {
      setCount(count + 1);
      setItems(items - 1);
    }
  };

  // handling subtracting items
  const handleMinus = () => {
    if (count === 0) {
      setCount(0);
    } else if (count === items) {
      setCount(items);
    } else {
      setCount(count - 1);
      setItems(items + 1);
    }
  };

  const handleSubmit = () => {
    navigate("/");
    toast.success("All Done!");
  };

  //fetching product data from mock server
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await GetSingleProduct(Number(id));
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    void fetchProduct();
  }, [id]);

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <div className="pt-[8.8rem] md:pt-[7.3rem] w-full px-2 md:px-5 lg:px-32">
          {product && (
            <div className="my-10 flex flex-col md:flex-row md:gap-x-10">
              <div className="border border-gray-200 rounded-xl h-[24rem] md:h-auto flex flex-col gap-y-4 lg:gap-y-8 md:w-1/2">
                <div className="h-[80%] md:h-[85%] lg:h-[80%] bg-white flex justify-center items-center rounded-xl">
                  <img
                    src={product.image}
                    alt=""
                    className="w-52 h-52 md:w-72 md:h-72 lg:w-92 lg:h-92"
                  />
                </div>

                <div className="flex gap-x-4 h-[20%] md:h-[15%] lg:h-[20%] ">
                  <div className="flex justify-center items-center grow border border-gray-200 rounded-lg hover:border hover:border-black bg-white">
                    <img
                      src={product.image}
                      alt="image"
                      className="w-10 h-10 lg:w-20 lg:h-20"
                      style={{ filter: "sepia(30%)" }}
                    />
                  </div>
                  <div className="flex justify-center items-center grow border border-gray-200 rounded-lg hover:border hover:border-black bg-white">
                    <img
                      src={product.image}
                      alt="image"
                      className="w-10 h-10 lg:w-20 lg:h-20"
                      style={{ filter: "sepia(40%)" }}
                    />
                  </div>
                  <div className="flex justify-center items-center grow border border-gray-200 rounded-lg hover:border hover:border-black bg-white">
                    <img
                      src={product.image}
                      alt="image"
                      className="w-10 h-10 lg:w-20 lg:h-20"
                      style={{ filter: "grayscale(70%)" }}
                    />
                  </div>
                  <div className="flex justify-center items-center grow border border-gray-200 rounded-lg hover:border hover:border-black bg-white">
                    <img
                      src={product.image}
                      alt="image"
                      className="w-10 h-10 lg:w-20 lg:h-20"
                      style={{ filter: "brightness(100%)" }}
                    />
                  </div>
                  {/* <div className="flex justify-center items-center grow bg-white border-2 border-gray-200 rounded-lg hover:border hover:border-black bg-purple-600/30 backdrop-brightness-75">
                    <div className="rounded-lg bg-purple-600/30 backdrop-brightness-75 w-full h-full flex justify-center items-center">
                      <div
                        style={{
                          backgroundImage: `url(${product.image})`,
                          filter: "sepia(100%)",
                        }}
                        className="bg-cover w-10 h-10 lg:w-20 lg:h-20 bg-purple-600/30 backdrop-brightness-75"
                      >
                        <div className="w-full h-full flex justify-center items-center bg-purple-600/30 backdrop-brightness-75"></div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="md:w-1/2 ">
                <div className="mt-5 md:mt-0">
                  <span className="border-b border-gray-300 pb-5">
                    <h1 className="text-2xl font-bold font-montserrat">
                      {product.title}
                    </h1>
                    <p className="text-xs pt-1">{product.description}</p>
                    <span className="flex items-center gap-x-1 mt-1">
                      <AiFillStar className="text-[#13ad14]" />
                      <p className="text-sm">{product.rating.rate}</p>
                      <p className="text-sm">({product.rating.count})</p>
                    </span>
                  </span>
                  <div className="mt-5 pb-3">
                    <p className="font-montserrat text-2xl mb-1">$234.78</p>
                    <p className="text-sm">
                      Supports payments within various e-channels
                    </p>
                  </div>
                  <div className="py-4 md:mt-2 border-y border-gray-300">
                    <p className="text-xl font-bold">Choose a Color</p>
                    <div className="mt-2 flex gap-x-3">
                      <div className="w-10 h-10 flex flex-col border-2 border-[#ffb985] rounded-full cursor-pointer">
                        <span className="w-full h-full rounded-t-full bg-primary"></span>
                        <span className="w-full h-full rounded-b-full bg-gray-500"></span>
                      </div>
                      <div className="w-10 h-10 flex flex-col rounded-full cursor-pointer hover:border-2 hover:border-[#ffb985]">
                        <span className="w-full h-full rounded-t-full bg-gray-500"></span>
                        <span className="w-full h-full rounded-b-full bg-blue-600/30 backdrop-brightness-75"></span>
                      </div>
                      <div className="w-10 h-10 flex flex-col rounded-full cursor-pointer hover:border-2 hover:border-[#ffb985]">
                        <span className="w-full h-full rounded-t-full bg-green-600/30 backdrop-brightness-75"></span>
                        <span className="w-full h-full rounded-b-full bg-gray-500"></span>
                      </div>
                      <div className="w-10 h-10 flex flex-col rounded-full cursor-pointer hover:border-2 hover:border-[#ffb985]">
                        <span className="w-full h-full rounded-t-full bg-gray-500"></span>
                        <span className="w-full h-full rounded-b-full bg-red-600/30 backdrop-brightness-75"></span>
                      </div>
                      <div className="w-10 h-10 flex flex-col rounded-full cursor-pointer hover:border-2 hover:border-[#ffb985]">
                        <span className="w-full h-full rounded-t-full bg-purple-600/30 backdrop-brightness-75"></span>
                        <span className="w-full h-full rounded-b-full bg-gray-500"></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-7 lg:gap-x-10 py-2 md:py-5">
                    <span className="bg-gray-100 flex gap-x-2 px-5 py-1.5 justify-between items-center text-primary rounded-3xl font-semibold text-lg w-32">
                      <button onClick={handleMinus} className="cursor-pointer">
                        <AiOutlineMinus />
                      </button>
                      <p>{count}</p>
                      <button onClick={handlePlus} className="cursor-pointer">
                        <AiOutlinePlus />
                      </button>
                    </span>
                    <span className="text-xs">
                      <p>
                        <small className="text-[#f48937] text-base font-semibold">
                          {items} items
                        </small>{" "}
                        left
                      </p>
                      <p>Don't miss it</p>
                    </span>
                  </div>
                  <div className="mt-5 md:mt-0 flex gap-x-5 lg:gap-x-8">
                    <Button
                      children="Buy Now"
                      onClick={handleSubmit}
                      primary={true}
                    />
                    <Button
                      children="Add to cart"
                      onClick={handleSubmit}
                      secondary={true}
                    />
                  </div>
                  <div className="border-2 border-gray-100 rounded-lg mt-4 p-2">
                    <span className="flex items-start gap-x-1">
                      <BsTruck className="text-[#ffb985] font-bold mt-1" />
                      <p className="text-sm">
                        <strong>Free Delievry</strong> <br />
                        Enter your postal code for free delivery
                      </p>
                    </span>
                    <span className="flex items-start gap-x-1">
                      <MdListAlt className="text-[#ffb985] font-bold mt-1" />
                      <p className="text-sm">
                        <strong>Return Delivery</strong> <br /> Free 30-Days
                        delivery returns
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Suspense>
    </Layout>
  );
};

export default Product;
