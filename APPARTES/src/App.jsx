import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollManager from "./components/ScrollManager";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BandaPage from "./pages/BandaPage";
import ComunidadPage from "./pages/ComunidadPage";
import AcademiaPage from "./pages/AcademiaPage";
import RevistaPage from "./pages/RevistaPage";
import ArticuloPage from "./pages/ArticuloPage";
import ArchivoPage from "./pages/ArchivoPage";
import TvPage from "./pages/TvPage";
import AgendaPage from "./pages/AgendaPage";
import UnetePage from "./pages/UnetePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="appartes" element={<AboutPage />} />
          <Route path="banda" element={<BandaPage />} />
          <Route path="comunidad" element={<ComunidadPage />} />
          <Route path="academia" element={<AcademiaPage />} />
          <Route path="revista" element={<RevistaPage />} />
          <Route path="revista/:slug" element={<ArticuloPage />} />
          <Route path="archivo" element={<ArchivoPage />} />
          <Route path="tv" element={<TvPage />} />
          <Route path="agenda" element={<AgendaPage />} />
          <Route path="unete" element={<UnetePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
