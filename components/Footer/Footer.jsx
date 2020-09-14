const DATE = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 h-54 pb-24 px-8 pt-2 flex justify-between">
        <div className="mx-2">
          <p className="font-bold text-lg text-gray-900">
            Designed and developed by Angel Archbold 💚
          </p>
        </div>
        <div className="mx-2">
          <p className="font-bold text-lg text-gray-900">
            {" "}
            © {DATE} - Bamboo 🐼
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
