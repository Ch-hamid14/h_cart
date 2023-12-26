import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../images/icons/CartIcon";
import ContactIcon from "../images/icons/ContactIcon";
import SecurePaymentIcon from "../images/icons/SecurePaymentIcon";
import RightDirectionIcon from "../images/icons/RightDirectionIcon";
const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-3xl font-bold title-font text-blue-900 mb-4">
              The Satisfaction of Customers H_CART
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Follow the trend and upgrade your look by shopping at H_Cart
              online.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <CartIcon />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Add your products in Carts
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  Welcome to our premier e-commerce destination for all your
                  shopping needs! Adding products to your cart has never been
                  more seamless.Explore our extensive collection of high-quality
                  products, carefully curated to cater to your diverse
                  preferences.
                </p>
                <div className="flex items-center justify-center">
                  <Link
                    to="/about"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <RightDirectionIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <SecurePaymentIcon />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Secure Payment
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  Experience worry-free shopping with our secure payment
                  options. At H_CART, we prioritize the safety of your
                  transactions, implementing robust security measures to
                  safeguard your sensitive information.
                </p>
                <div className="flex items-center justify-center">
                  <Link
                    to="/about"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <RightDirectionIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <ContactIcon />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Contact with us, we In Touch with our Customers
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  Your satisfaction is our priority, and our dedicated team is
                  here to provide prompt and helpful responses to ensure a
                  seamless and positive experience for you. Thank you for
                  choosing us, and we look forward to being of assistance
                  whenever you need us!
                </p>
                <div className="flex items-center justify-center">
                  <Link
                    to="/about"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <RightDirectionIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/account">
            <button
              className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2
             px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Next
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
