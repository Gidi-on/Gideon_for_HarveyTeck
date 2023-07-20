import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Spinner from "./utils/Spinner";

const NotFound = lazy(() => import("./pages/NotFound"));
const Product = lazy(() => import("./pages/Product"));

const App = () => {
  const shouldRedirect = true;
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route
          path="*"
          element={shouldRedirect && <Navigate replace to="/not-found" />}
        ></Route>
      </Routes>
    </Suspense>
  );
};

export default App;
