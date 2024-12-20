import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children, noPadding, ...rest }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
