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
        <section className="container mx-auto px-3">
          <div className="flex justify-center items-center mx-2 my-6 sm-flex-col sm-text-center">
            <figure className="pr-2">
              <img
                className="object-cover w-64 h-24"
                src="/bambo-logo.png"
                alt="bambo-logo"
              />
            </figure>
            <div className="flex-col justify-center w-64 items-center">
              <h1 className="text-xl font-extrabold leading-none pt-2 tracking-wide text-gray-900">
                Bambo
              </h1>
              <p className="text-xl font-medium leading-none pt-2 tracking-wide text-gray-800">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-green-100 my-6 px-3 border-2 border-green-200 border-solid rounded-lg">
          <div className="container mx-auto">
            <h4 className="text-center text-3xl my-0 font-extrabold text-gray-900">
              Productos
            </h4>
            <div className="flex justify-center items-center mx-2 flex-wrap">
              <div className="max-w-sm w-64 rounded overflow-hidden shadow-lg mx-2 my-2 text-center transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-80 transition ease-in-out duration-200 text-gray-900">
                <div className="bg-green-100">
                  <figure className="rounded-lg">
                    <img
                      className="w-full px-4 py-4 object-cover"
                      src={productList.image}
                      alt="cakes-image"
                    />
                  </figure>
                </div>
                <div className="px-6 py-4 bg-white bg-white">
                  <h4 className="font-bold text-xl mb-2 font-extrabold text-gray-900">
                    {productList.name}
                  </h4>
                  <p class="font-extrabold text-gray-700">
                    Precio: ${productList.price}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 bg bg-white ">
                  <Link href="/product/[productList.link]" as={`/product/${productList.id}`}>
                    <button className="bg-green-200 rounded-full px-3 py-2 font-semibold text-green-900 mr-2 mb-2">
                      Ver más
                    </button>
                  </Link>
                </div>
              </div>
              {/* 
              <div className="max-w-sm w-64 rounded overflow-hidden shadow-lg mx-2 my-2 text-center transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-80 transition ease-in-out duration-200 text-gray-900">
                <div className="bg-green-100">
                  <figure className="rounded-lg">
                    <img
                      className="w-full px-4 py-4 object-cover"
                      src="/images/cakes.jpeg"
                      alt="cakes-image"
                    />
                  </figure>
                </div>
                <div className="px-6 py-4 bg-white">
                  <h4 className="font-bold text-xl mb-2 font-extrabold text-gray-900">
                    CUPCAKES
                  </h4>
                  <p class="font-extrabold text-gray-700">Precio: $16.000</p>
                </div>
                <div className="px-6 pt-4 pb-2 bg-white ">
                  <button className="bg-green-200 rounded-full px-3 py-2 font-semibold text-green-900 mr-2 mb-2">
                    Ver más
                  </button>
                </div>
              </div>

              <div className="max-w-sm w-64 rounded overflow-hidden shadow-lg mx-2 my-2 text-center transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-80 transition ease-in-out duration-200 text-gray-900">
                <div className="bg-green-100">
                  <figure className="rounded-lg">
                    <img
                      className="w-full px-4 py-4 object-cover"
                      src="/images/cakes.jpeg"
                      alt="cakes-image"
                    />
                  </figure>
                </div>
                <div className="px-6 py-4 bg-white">
                  <h4 className="font-bold text-xl mb-2 font-extrabold text-gray-900">
                    CUPCAKES
                  </h4>
                  <p class="font-extrabold text-gray-700">Precio: $16.000</p>
                </div>
                <div className="px-6 pt-4 pb-2 bg-white ">
                  <button className="bg-green-200 rounded-full px-3 py-2 font-semibold text-green-900 mr-2 mb-2">
                    Ver más
                  </button>
                </div>
              </div>

              <div className="max-w-sm w-64 rounded overflow-hidden shadow-lg mx-2 my-2 text-center transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-80 transition ease-in-out duration-200 text-gray-900">
                <div className="bg-green-100">
                  <figure className="rounded-lg">
                    <img
                      className="w-full px-4 py-4 object-cover"
                      src="/images/cakes.jpeg"
                      alt="cakes-image"
                    />
                  </figure>
                </div>
                <div className="px-6 py-4 bg-white">
                  <h4 className="font-bold text-xl mb-2 font-extrabold text-gray-900">
                    CUPCAKES
                  </h4>
                  <p class="font-extrabold text-gray-700">Precio: $16.000</p>
                </div>
                <div className="px-6 pt-4 pb-2 bg-white ">
                  <button className="bg-green-200 rounded-full px-3 py-2 font-semibold text-green-900 mr-2 mb-2">
                    Ver más
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center">
          <div className="border border-gray-400 border-gray-400 bg-white rounded-b rounded-r p-4 flex flex-col justify-center items-center leading-normal mb-8">
            <div>
              <h6 className="text-gray-900 font-bold text-xl mb-2 italic">
                "Disfruta lo diferencia"
              </h6>
              <p className="text-gray-700 text-base mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div>
                <ul>
                  <li className="text-gray-900">
                    {" "}
                    <i className="mdi mdi-phone"></i> <span>350541245</span>{" "}
                  </li>
                  <li className="text-gray-900">
                    {" "}
                    <i className="mdi mdi-email"></i>{" "}
                    <span>bambo@email.com</span>{" "}
                  </li>
                  <li></li>
                </ul>
              </div>
              <div>
                <ul className="flex justify-between items-center">
                  <li className="mx-1 my-1">
                    {" "}
                    <span className="text-left text-gray-900 font-bold ">
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
