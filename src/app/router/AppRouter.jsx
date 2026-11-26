import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import HomePage from "../../pages/Home/HomePage";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";
import ErrorPage from "../../pages/Error/ErrorPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
