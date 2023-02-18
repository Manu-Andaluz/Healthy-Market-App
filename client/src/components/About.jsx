import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-continuo leading-9 text-gray-800 pb-4 ">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-7/12 ">
          <img
            className="w-full h-full"
            src="https://www.freevector.com/uploads/vector/preview/30883/EAT_HEALTHY_FOOD.jpg"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-continuo leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className=" flex w-full lg:w-7/12 lg:pt-8">
          <div className="grid md:grid-cols-7 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg bg-green-100 rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden rounded-full"
                src="https://avatars.githubusercontent.com/u/100098236?v=4"
                alt="Lorelei featured Img"
              />
              <img
                className="md:hidden block rounded-full p-12"
                src="https://avatars.githubusercontent.com/u/100098236?v=4"
                alt="Lorelei featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Lorelei
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden rounded-full"
                src="https://avatars.githubusercontent.com/u/109633041?v=4"
                alt="Manuel featured Img"
              />
              <img
                className="md:hidden block rounded-full p-12"
                src="https://avatars.githubusercontent.com/u/109633041?v=4"
                alt="Manuel featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Manuel
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden rounded-full"
                src="https://avatars.githubusercontent.com/u/109548432?v=4%22%3E"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block rounded-full p-12"
                src="https://avatars.githubusercontent.com/u/109548432?v=4%22%3E"
                alt="Gaston featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Gaston
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden rounded-full"
                src="https://avatars.githubusercontent.com/u/110116045?v=4"
                alt="Rocio featured img"
              />
              <img
                className="md:hidden block rounded-full p-12"
                src="https://avatars.githubusercontent.com/u/110116045?v=4"
                alt="Rocio featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Rocio
              </p>
            </div>

            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden rounded-full"
                src=""
                alt="Juan featured img"
              />
              <img
                className="md:hidden block rounded-full p-12"
                src=""
                alt="Juan featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Juan
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden rounded-full"
                src=""
                alt="Nau featured img"
              />
              <img
                className="md:hidden block rounded-full p-12"
                src=""
                alt="Nau featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Nau
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden rounded-full"
                src=""
                alt="Cristo featured img"
              />
              <img
                className="md:hidden block rounded-full p-12"
                src=""
                alt="Cristo featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Cristobal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
