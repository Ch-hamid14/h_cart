import React from "react";
import CartIcon from "../images/icons/CartIcon";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <CartIcon />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Our Story
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-justify">
                  H_Cart started as a passion project among a group of
                  like-minded individuals who shared a common goal – to create
                  an online shopping destination that transcends the ordinary.
                  With a keen eye for trends and a dedication to customer
                  satisfaction, H_Cart emerged as a brand that understands the
                  evolving needs of the modern consumer.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4 text-justify">
                Welcome to H_Cart, your ultimate destination for a seamless and
                unparalleled online shopping experience. At H_Cart, we redefine
                the way you shop by combining style, convenience, and
                innovation, all at your fingertips. Founded with a vision to
                elevate your shopping journey, H_Cart is not just an e-commerce
                platform; it's a lifestyle destination where fashion,
                technology, and customer satisfaction converge. Our brand is
                built on a foundation of trust, quality, and a commitment to
                delivering the latest trends and cutting-edge products to your
                doorstep.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
