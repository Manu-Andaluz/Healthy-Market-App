import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="2xl:container 2xl:mx-auto lg:py-5 lg:px-6 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-continuo leading-9 text-green1 pb-4 ">
              Sobre nosotros
            </h1>
            <p className="font-bree  text-base font-medium leading-6 text-gray-600 ">
              Creemos que comer saludable no debería ser una tarea difícil. Es
              por eso que creamos una aplicación que conecta a compradores con
              los mejores productos de comida saludable, permitiendo que una
              alimentación balanceada y nutritiva sea accesible y fácil de
              obtener. Nuestro equipo está formado por estudiantes de la carrera
              Full Stack Developer de SOY HENRY, estamos comprometidos en
              brindar una solución efectiva para un estilo de vida más
              saludable. Nos enfocamos en brindar una experiencia simple y fácil
              de usar en nuestra plataforma, permitiendo que tanto los
              compradores se concentren en lo que realmente importa: la calidad
              y el sabor de la comida.
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
            <h1 className="text-3xl lg:text-4xl font-continuo leading-9 text-green1 pb-4">
              Nuestra historia
            </h1>
            <p className="font-bree text-base leading-6 text-gray-600 ">
              Somos un grupo de desarrolladores que hemos sobrevivido a un
              bootcamp de más de 800 horas de código, y estamos trabajando en
              nuestro proyecto final esperando que disfruten del resultado tanto
              como nosotros disfrutamos del proceso.
            </p>
            <div className="my-5">
              <a
                className="text-3xl lg:text-4xl font-continuo leading-9 text-green1 pb-4"
                href="https://github.com/Manu-Andaluz/Healthy-Market-App"
              >
                Repositorio GitHub
              </a>
            </div>
          </div>
          <div className=" flex w-full lg:w-7/12 lg:pt-8">
            <div className="grid md:grid-cols-7 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg bg-green-100 rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center bg">
                <Link
                  to="https://www.linkedin.com/in/loreley-milazzo-448691238/"
                  target="_blank"
                >
                  <img
                    className="md:block hidden rounded-full"
                    src="https://avatars.githubusercontent.com/u/100098236?v=4"
                    alt="Loreley featured Img"
                  />
                  <img
                    className="md:hidden block rounded-full p-12"
                    src="https://avatars.githubusercontent.com/u/100098236?v=4"
                    alt="Loreley featured Img"
                  />
                </Link>
                <p className="font-bree text-xl leading-5 text-green1 mt-4">
                  Loreley
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Link
                  to="https://www.linkedin.com/in/manuel-andaluz/"
                  target="_blank"
                >
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
                </Link>
                <p className="font-bree text-xl leading-5 text-green1 mt-4">
                  Manuel
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Link
                  to="https://www.linkedin.com/in/gaston-geminiani-5a7687233/"
                  target="_blank"
                >
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
                </Link>
                <p className="font-bree text-xl leading-5 text-green1 mt-4">
                  Gaston
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Link
                  to="https://www.linkedin.com/in/roc%C3%ADo-bel%C3%A9n-molina-99661b78/"
                  target="_blank"
                >
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
                </Link>
                <p className="font-bree text-xl leading-5 text-green1 mt-4">
                  Rocio
                </p>
              </div>

              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Link
                  to="https://www.linkedin.com/in/edgar-nah%C3%BA-favela-b3a639239/"
                  target="_blank"
                >
                  <img
                    className="md:block hidden rounded-full"
                    src="https://avatars.githubusercontent.com/u/93899648?v=4"
                    alt="Nau featured img"
                  />
                  <img
                    className="md:hidden block rounded-full p-12"
                    src="https://avatars.githubusercontent.com/u/93899648?v=4"
                    alt="Nau featured img"
                  />
                </Link>
                <p className="font-bree text-xl leading-5 text-green1 mt-4">
                  Nahu
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden rounded-full"
                  src="https://avatars.githubusercontent.com/u/100233822?v=4"
                  alt="Cristo featured img"
                />
                <img
                  className="md:hidden block rounded-full p-12"
                  src="https://avatars.githubusercontent.com/u/100233822?v=4"
                  alt="Cristo featured img"
                />
                <p className="font-bree text-xl leading-5 text-green1 mt-4">
                  Cristobal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
