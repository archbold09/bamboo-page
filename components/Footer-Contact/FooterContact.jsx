const FooterContact = (props) => {
  return (
    // <div className="sm-hidden">
      <div className="flex justify-end items-center navbarFooter z-50 mb-16">
        <ul>
          <li className="mr-6 my-3">
            <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center" target="blank" href="tel:3015320181">
              <i className="mdi mdi-phone phone-icon"></i>
            </a>
          </li>
          <li className="mr-6 my-3">
            <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center" target="blank" href="https://api.whatsapp.com/send?phone=573015320181&text=Hola!%20deseo%20m%C3%A1s%20informaci%C3%B3n!">
              <i className="mdi mdi-whatsapp wsp-icon"></i>
            </a>
          </li>
        </ul>
      {/* </div> */}
    </div>
  );
};

export default FooterContact;
