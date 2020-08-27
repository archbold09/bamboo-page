const NavbarFooter = () => {
  return (
    <>
      <div className="sm-hidden">
        <nav className="bg-gray-100 navbarFooter flex justify-center h-16">
          <ul className="flex items-center text-center">
            <a href="#">
              <li className="px-3 border-b-4 border-green-400 py-0 text-gray-900">
              <i className="mdi mdi-home text-lg py-0"></i>
                <p className="text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
                  Inicio
                </p>
              </li>
            </a>
            <a href="#">
              <li className="px-3 border-l-2 border-r-2 py-0 text-gray-900">
               <i className="mdi mdi-package text-lg py-0"></i>
                <p className="text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
                  Productos
                </p>
              </li>
            </a>
            <a href="#">
              <li className="px-3 py-0 text-gray-900">
               <i className="mdi mdi-card-text telg-xl py-0"></i>
                <p className="text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
                  Información
                </p>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarFooter;
