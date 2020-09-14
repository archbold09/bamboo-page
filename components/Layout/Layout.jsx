import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterContact from "../Footer-Contact/FooterContact";
import NavbarFooter from "../NavbarFooter/NavbarFooter";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <FooterContact />
      <Footer />
      <NavbarFooter />
    </>
  );
};

export default Layout;
