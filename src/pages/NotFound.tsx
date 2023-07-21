import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-primary">
        <div>
          <h3 className="text-3xl font-sans text-[#fff] font-poppins my-5 lg:text-xl text-center">
            404 page not found
          </h3>
          <p className="text-lg font-sans text-[#fff] mt-5 font-nunito w-full lg:text-base text-center">
            We are sorry but the page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="mt-5 block text-[#fff] font-sans text-base bg-[rgba(9, 46, 140, 0.92)] p-3 text-center hover:opacity-80"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
