import './App.css'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import ChakraWithImage from './Components/Hero'
import Navbar from './Components/Navbar'


function App() {

  return (
    <>
      <Navbar/>
      <ChakraWithImage/>
      <Gallery images={[
        { id: 1, url: 'https://adinathtrust.org/assets/img/gallery/CC_S1677.jpg', title: 'Modern Operating Theater', description: 'State-of-the-art surgical facilities' },
        { id: 2, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.20.58_316908dd.webp', title: 'Comfortable Patient Rooms', description: 'Private rooms with scenic views' },
        { id: 3, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.34_cdcaf2ea.webp', title: 'Advanced Imaging Center', description: 'Latest diagnostic technology' },
        { id: 4, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.35_f74350a2.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
        { id: 5, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.35_e4a0958e.webp', title: 'Modern Operating Theater', description: 'State-of-the-art surgical facilities' },
        { id: 6, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.37_afa7478f.webp', title: 'Comfortable Patient Rooms', description: 'Private rooms with scenic views' },
        { id: 11, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.20.59_e2b9ee79.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
        { id: 14, url: 'https://adinathtrust.org/assets/img/photos/15.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
        { id: 15, url: 'https://adinathtrust.org/assets/img/photos/14.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
        { id: 7, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.39_2c222f69.webp', title: 'Advanced Imaging Center', description: 'Latest diagnostic technology' },
        { id: 8, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.40_b5869fe1.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
        { id: 9, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.41_7f7ce9bb.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
        { id: 10, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.07_b9d7f7d2.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
        { id: 10, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.05_8eeec80c.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
        { id: 12, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.20.57_3de235cf.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
        { id: 13, url: 'https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.20.56_75380886.webp', title: 'Pediatric Wing', description: 'Child-friendly environment' },
      ]} />
      <Footer />
    </>
  )
}

export default App
