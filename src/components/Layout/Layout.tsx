import Header from "@/components/Header/Header";
import Follow from "@/components/Follow/Follow";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import { ReactNode } from "react";

type Props = {
  noHeader?: boolean;
  children: ReactNode;
};

const Layout = ({ noHeader, children }: Props) => {
  if (noHeader)
    return (
      <>
        {children}
        <Follow />
        <Contacts />
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
