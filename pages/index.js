import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://bamboo-page.vercel.app/api/products");
  const { data: productList } = await response.json();

  return {
    props: {
      productList,
    },
  };
};

const Home = ({ productList }) => {
  return (
    <>
      <main>
        <section className="container mx-auto my-32 px-3" id="inicio">
          <div className="flex justify-center items-center mx-2 my-6 sm-flex-col sm-text-center">
            <figure className="pr-2">
              <img
                className="object-cover w-64 h-24"
                src="/bambo-logo.png"
                alt="bambo-logo"
              />
            </figure>
            <div className="flex-col justify-center w-64 items-center">
              <h1 className="text-xl font-extrabold leading-none pt-2 tracking-wide text-gray-800">
                Bamboo
              </h1>
              <p className="text-xl font-medium leading-none pt-2 tracking-wide text-gray-800 italic">
                Disfruta la diferencia
              </p>
            </div>
          </div>
        </section>

        {/* <section className="my-6 px-3 border-2 border-green-200 border-solid rounded-lg" id="productos"> */}
        {/* <section className="bg-green-100 my-6 px-3 border-2 border-green-200 border-solid rounded-lg"> */}
        <section
          className="my-6 px-3 border-top-2 border-b-2 border-green-200 border-solid rounded-lg"
          id="productos"
        >
          <div className="container mx-auto">
            <h4 className="text-center text-3xl my-1 font-extrabold text-gray-800">
              Productos
              <span
                className="emoji hearts text-lg hvr-buzz"
                role="img"
                aria-label="hearts"
              ></span>
            </h4>
            <div className="flex justify-center items-center mx-4 mb-4 flex-wrap">
              {productList.map((product) => (
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto hvr-bob">
                  <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center">
                    <figure className="rounded-lg">
                      <img
                        className="w-full object-cover h-64"
                        // className="w-full px-4 py-4 object-cover h-64"
                        src={product.image}
                        alt="cakes-image"
                      />
                    </figure>
                  </div>
                  <div className="bg-white -mt-3 shadow-lg rounded-lg overflow-hidden p-10  w-full">
                    <div className="header-content inline-flex ">
                      <div className="category-title flex-1 text-sm"></div>
                    </div>
                    <div className="summary-post text-base text-justify">
                      <h4 className="font-bold text-lg mb-2 font-extrabold text-gray-800">
                        {product.name}
                      </h4>
                      <p class="font-light text-gray-700">{product.detail}</p>
                      <p class="font-extrabold text-gray-700">
                        <span className="font-bold text-gray-700">Precio:</span>{" "}
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* {productList.map((product) => (
                <div className="max-w-sm 1/4 h-auto rounded overflow-hidden shadow-lg mx-2 my-2 text-center transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-80 transition ease-in-out duration-200 text-gray-800 animate__animated animate__fadeInBottomRight">
                  <div className="bg-green-100">
                  <figure className="rounded-lg">
                    <img
                      className="w-full object-cover h-64"
                      // className="w-full px-4 py-4 object-cover h-64"
                      src={product.image}
                      alt="cakes-image"
                    />
                  </figure>
                  </div>
                  <div className="px-6 py-4 bg-white bg-white">
                    <h4 className="font-bold text-lg mb-2 font-extrabold text-gray-800">
                      {product.name}
                    </h4>
                    <p class="font-light text-gray-700">{product.detail}</p>
                    <p class="font-extrabold text-gray-700">
                      <span className="font-bold text-gray-700">Precio:</span> $
                      {product.price}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2 bg bg-white ">
                    <Link
                      href="/product/[product.link]"
                      as={`/product/${product.id}`}
                    >
                      <button className="bg-green-200 rounded-full px-3 py-2 font-semibold text-green-900 mr-2 mb-2">
                        Ver más
                      </button>
                    </Link>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center" id="informacion">
          <div className="border border-gray-400 border-gray-400 bg-white rounded-b rounded-r p-4 flex flex-col justify-center items-center leading-normal mb-8">
            <div>
              <h6 className="text-gray-800 font-bold text-xl mb-2 italic">
                Información
              </h6>
              <p className="text-gray-700 text-base mb-3">
              Coloca Domicilios a Barranquilla y Soledad 📍
              </p>
              <div>
                <ul>
                  <li className="text-gray-800">
                    {" "}
                    <i className="mdi mdi-phone"></i><a className="text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center" target="blank" href="tel:3015320181"><span>301 5320181</span></a> {" "}
                  </li>
                  {/* <li className="text-gray-800">
                    {" "}
                    <i className="mdi mdi-email"></i>{" "}
                    <span>bambo@email.com</span>{" "}
                  </li> */}
                  <li></li>
                </ul>
              </div>
              <div>
                <ul className="flex justify-between items-center">
                  <li className="mx-1 my-1">
                    {" "}
                    <span className="text-left text-gray-800 font-bold ">
                      Métodos de pago
                    </span>{" "}
                  </li>

                  <div className="flex">
                    <li className="mx-1 my-1 border border-gray-200 rounded-full w-8 h-8">
                      {" "}
                      <img
                        className="w-8 h-8 object-cover"
                        src="/logos/bancolombia.png"
                        alt="logo-bancolombia"
                      />{" "}
                    </li>
                    <li className="mx-1 my-1 border border-gray-200 rounded-full w-10 h-10">
                      {" "}
                      <img
                        className="w-10 h-10 object-cover"
                        src="/logos/nequi.png"
                        alt="logo-nequi"
                      />{" "}
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
