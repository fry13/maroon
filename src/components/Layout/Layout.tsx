import Header from "@/components/Header/Header";
import Follow from "@/components/Follow/Follow";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import { ReactNode } from "react";

type Props = {
  mainPage?: boolean;
  productPage?: boolean;
  children: ReactNode;
};

const Layout = ({ mainPage, productPage, children }: Props) => {
  if (mainPage)
    return (
      <>
        {children}
        <Follow />
        <Contacts />
        <Footer />
      </>
    );
  if (productPage)
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  else
    return (
      <>
        <Header />
        {children}
        <Follow />
        <Contacts />
        <Footer />
      </>
    );
};

export default Layout;
