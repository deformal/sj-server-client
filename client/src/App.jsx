import Home from "./components/Home"
import Sum from "./components/Sum"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sum" element={<Sum />} />
      </Routes>
    </Router>
  )
}

export default App
