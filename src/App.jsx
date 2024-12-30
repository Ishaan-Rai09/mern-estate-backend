import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from "./assets/pages/Signin"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Profile from "./assets/pages/Profile"
import SignUp from "./assets/pages/SignUp"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
