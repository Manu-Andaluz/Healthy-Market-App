const Footer = () => {
  return (
    <footer className="p-4 mt-5 bg-amarillo rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline ">
          Healthy Market App™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Políticas de privacidad
          </a>
        </li>
        <li>
          <a href="/about" className="mr-4 hover:underline md:mr-6">
            Sobre Nosotros
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contacto
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
