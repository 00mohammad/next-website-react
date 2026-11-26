import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
