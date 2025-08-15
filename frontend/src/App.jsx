import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import MovieDetail from "./pages/MovieDetail"
import SeatSelection from "./pages/SeatSelection"
import Favourite from "./pages/Favourite"
import { Toaster } from "react-hot-toast"
import Mytickets from "./pages/Mytickets"
import MoviesPage from "./pages/MoviesPage"

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
        <Route path="/seat/:id/:date" element={<SeatSelection />} />
        <Route path="/mytickets" element={<Mytickets/>} />
        <Route path="/favourite" element={<Favourite/>} />
      </Routes>
      {isAdmin? null : <Footer/>}
      <Toaster/>
    </>
  )
}

export default App
