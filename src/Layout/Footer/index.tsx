import { affiliate } from "../../utils/data";

const Footer = () => {
  return (
    <div className="px-4 py-5 lg:px-12 lg:pb-0 font-inter">
      <div className="border-t border-gray-400 lg:flex lg:justify-between lg:items-center">
        <div className="my-3 lg:my-0">
          <span className="flex flex-wrap gap-x-3 md:gap-x-5 justify-start">
            {affiliate.map((data) => (
              <span
                key={data.title}
                className="flex items-center gap-x-2 mb-2 lg:mb-0"
              >
                <>{data.icon}</>
                <p className="hover:text-orange-500 cursor-pointer">
                  {data.title}
                </p>
              </span>
            ))}
          </span>
        </div>
        <div className="flex gap-x-4 md:gap-x-6 items-center mb-3 lg:mb-0 md:py-4">
          <a href="/" className="hover:text-orange-500 cursor-pointer">
            Terms of Service
          </a>
          <a href="/" className="hover:text-orange-500 cursor-pointer">
            Privacy & Policy
          </a>
        </div>
        <p>Gideon for Harveyteck | 2023</p>
      </div>
    </div>
  );
};

export default Footer;
