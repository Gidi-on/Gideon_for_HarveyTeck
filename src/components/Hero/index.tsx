import headphones from "../../assets/headphone.png";

const index = () => {
  return (
    <div className="pt-[8.8rem] md:pt-[7.3rem] w-full">
      <div className="bg-[#fbf0e4] p-3 md:px-10 lg:px-24 md:py-0 md:flex md:flex-row-reverse md:max-h-[18rem] md:justify-between">
        <div className="mb-3 md:mb-0 transform scale-x-[-1] md:transform md:scale-x-[1] w-fit md:w-1/2 lg:w-[40%] xl:mr-20">
          <img src={headphones} alt="banner" className="h-full pr-20 md:pr-0" />
        </div>
        <div className="mb-3 flex flex-col justify-center items-center md:items-start md:w-1/2 lg:w-[60%] lg:pr-14 xl:pr-[10rem]">
          <h1 className="text-primary text-lg font-medium text-center md:text-start md:text-2xl lg:text-4xl lg:leading-tight md:font-bold font-montserrat">
            Grab Upto 50% Off On Selected Headphone
          </h1>
          <button className="bg-primary px-4 py-1.5 md:py-2 mt-2 md:mt-4 lg:py-3 lg:px-7 rounded-2xl lg:rounded-[2rem] text-xs lg:text-lg lg:font-medium text-white hover:text-primary hover:bg-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
