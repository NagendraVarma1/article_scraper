import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h2>ARTICLE SCRAPER</h2>
      <Outlet />
    </>
  );
};

export default RootLayout;
