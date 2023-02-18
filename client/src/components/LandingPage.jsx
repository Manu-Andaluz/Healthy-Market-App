import React from "react";

const LandingPage = () => {
  return (
    <div>

  
  <section className="mb-40">
    <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <button
            className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-grisLetter hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <a className="navbar-brand text-grisLetter" href="#!">
            <img src="https://tse3.mm.bing.net/th?id=OIP.wlcw_FBzjN2zwxNEsm4uDQHaHa&pid=Api&P=0" alt= "logo" className="h-12 w-12 scale-20"/>
          </a>
        </div>
        <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            <li className="nav-item">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
            </li>
            <li className="nav-item mb-2 lg:mb-0">
              <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Projects</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center lg:ml-auto">
          <button type="button" class="inline-block px-6 py-2.5 mr-2 bg-transparent text-green1 font-medium text-xs leading-tight uppercase rounded hover:text-grisLetter hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">  Quiero sumar mi tienda</button>

          <button type="button" class="inline-block px-6 py-2.5 bg-green1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green2 hover:shadow-lg focus:bg-grisLetter focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rosa active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Mi perfil </button>
          <button type="button" class="inline-block px-6 py-2.5 mr-2 bg-transparent text-green1 font-medium text-xs leading-tight uppercase rounded hover:text-grisLetter hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">    Sobre nosotros</button>
        </div>
      </div>
    </nav>

    <div className="px-6 py-12 md:px-12 bg-gray-50 text-grisLetter text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Healthy Markey <br /><span class="text-">APP</span></h1><p className="text-grisLetter text-sm md:text-base mb-8" style={{ fontSize: '16px' }}>
            Bienvenido a Healthy Market App, el lugar perfecto para encontrar y comprar alimentos saludables de alta calidad. Con nuestra plataforma, podrás apoyar a comerciantes locales y encontrar fácilmente productos orgánicos, sin gluten, vegetarianos y veganos. ¿Estás listo para comenzar tu viaje hacia una alimentación saludable? Regístrate hoy mismo en Healthy Market App. ¡Te esperamos!
              </p>
            <a className="inline-block px-7 py-3 mr-2 bg-green1 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green2 hover:shadow-lg focus:bg-grisLetter focus:shadow-lg focus:outline-none focus:ring-0 active:bg-grisLetter active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Ir a la tienda</a>
            <a className="inline-block px-7 py-3 bg-transparent text-green1 font-medium text-sm leading-snug uppercase rounded hover:text-grisLetter hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Ver ofertas</a>
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.CkLWAMvk0nVDfPlnkZDdlAHaIO&pid=Api&P=0"
              className="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>


</div>

  );
};

export default LandingPage;
