import Navbar from "../components/navbar";
import Head from "next/head";
import Footer from "../components/footer";
import { Fragment } from "react";

const Layout = (prop) => {
  return (
    <Fragment>
      <Head />
      <header className="w-full bg-black">
        <Navbar />
      </header>
      <main>{prop.children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
