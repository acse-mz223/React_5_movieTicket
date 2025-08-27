import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import MovieDetail from "./pages/MovieDetail"
import SeatSelection from "./pages/SeatSelection"
import Favourite from "./pages/Favourite"
import { Toaster } from "react-hot-toast"
import MoviesPage from "./pages/MoviesPage"
import MyHistory from "./pages/MyHistory"
import Dashboard from "./pages/admin/Dashboard"
import DataAnalysis from "./pages/admin/DataAnalysis"
import Showing from "./pages/admin/Showing"
import FilmSetting from "./pages/admin/FilmSetting"
import SeatSetting from "./pages/admin/SeatSetting"

function App() {
  // admin
  let isAdmin = useLocation().pathname.startsWith("/admin")
  return (
    <>
      {isAdmin? null : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/seat/:showtimeid" element={<SeatSelection />} />
        <Route path="/history" element={<MyHistory/>} />
        <Route path="/favourite" element={<Favourite/>} />

        <Route path="/admin/*" element={<Dashboard/>} >
          <Route index element={<Showing/>} />
          <Route path="showing" element={<Showing/>} />
          <Route path="filmsetting" element={<FilmSetting/>} />
          <Route path="dataanalysis" element={<DataAnalysis/>} />
          <Route path="seatsetting" element={<SeatSetting/>} />
        </Route>
      </Routes>
      {isAdmin? null : <Footer/>}
      <Toaster/>
    </>
  )
}

export default App
