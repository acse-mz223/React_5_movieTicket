import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import MovieDetail from "./pages/MovieDetail"
import SeatSelection from "./pages/SeatSelection"
import BookHistory from "./pages/BookHistory"
import Favourite from "./pages/Favourite"
import { Toaster } from "react-hot-toast"

function App() {
  // admin
  let isAdmin = useLocation().pathname.startsWith("/admin")
  return (
    <>
      {isAdmin? null : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/seat/:id/:date" element={<SeatSelection />} />
        <Route path="/history" element={<BookHistory/>} />
        <Route path="/favourite" element={<Favourite/>} />
      </Routes>
      {isAdmin? null : <Footer/>}
      <Toaster/>
    </>
  )
}

export default App
