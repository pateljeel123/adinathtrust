import AllRoutes from './AllRoutes'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ScrollToTop from './utiles/ScrollToTop'

function App() {

  return (
    <div className="App bg-[#F6F5EC] min-h-screen flex flex-col justify-between">
      <ScrollToTop />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
