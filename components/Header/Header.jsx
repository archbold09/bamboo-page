const Header = () => {
  return (
    <>
      <div className="bg-green-100 border-b-2 border-green-300">
        <header className="flex justify-between mx-6 py-3">
          <div className="flex items-center">
            <a href="#">
              <figure className="bg-white border-solid border-2 border-green-300 rounded-full shadow-lg mr-3 animate__animated animate__backInLeft">
                <img
                  className="rounded-full object-cover w-12 h-12"
                  src="/bambo-logo-face.png"
                  alt="bambo-logo-face"
                />
              </figure>
            </a>
            <div className="flex-col">
              <h6 className="text-xl font-extrabold leading-none pt-2 tracking-wide sm-hidden-navbar text-gray-900">
                Bambo
              </h6>
              <p className="text-lg font-medium leading-none tracking-wide sm-hidden-navbar text-gray-900">
                Colombia - Barranquilla
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <ul className="flex">
              <a href="#">
                <li className="border-2 border-green-300 py-1 px-2 mx-1 my-1 rounded-full transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-gray-900">
                  <i className="text-lg mdi mdi-instagram"></i>
                </li>
              </a>
              <a href="#">
                <li className="border-2 border-green-300 py-1 px-2 mx-1 my-1 rounded-full transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-gray-900">
                  <i className="text-lg mdi mdi-twitter"></i>
                </li>
              </a>
              <a href="#">
                <li className="border-2 border-green-300 py-1 px-2 mx-1 my-1 rounded-full transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-gray-900">
                  <i className="text-lg mdi mdi-facebook"></i>
                </li>
              </a>
            </ul>
          </div>
        </header>
        <nav className="flex justify-end mx-4 mt-1 sm-hidden-navbar">
          <ul className="flex">
            <a href="#">
              <li className="px-3 border-b-4 border-green-500 text-gray-900">
                <p className="text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
                  Inicio
                </p>
              </li>
            </a>
            <a href="#">
              <li className="px-3 text-gray-900">
                <p className="text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
                  Productos
                </p>
              </li>
            </a>
            <a href="#">
              <li className="px-3 text-gray-900">
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

export default Header;
