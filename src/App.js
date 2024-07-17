import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import InputSearch from "./Components/InputSeacrch/InputSearch";
import RootLayout from "./Components/RootLayout/RootLayout";
import ArticleDetails from "./Components/ArticleDetails/ArticleDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {path: '/', element: <InputSearch />},
        {path: '/ArticleDetails', element: <ArticleDetails />}
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
