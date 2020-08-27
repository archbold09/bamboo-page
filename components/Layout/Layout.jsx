import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavbarFooter from "../NavbarFooter/NavbarFooter";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
      <NavbarFooter />
    </>
  );
};

export default Layout;
