import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Doctors from './Components/Doctors'
import MedicalReport from './Components/Account'
import AstrologyHero from './Components/AstrologyHero'
import CenterOfExcellence from './Components/CenterOfExcellence'
import { Hospitalimages } from './Components/Centers_Data'
import Gallery from './Components/Gallery'
import ChakraWithImage from './Components/Hero'
import OurStory from './Components/OurStory'
import Document from './Components/Document'
import GalleryContent from './Components/GalleryContent'
import HealthCheckupCarousel from './Components/HealthCheckupCarousel'
import DoctorProfile from './Components/DoctorProfile'

const FirstPages = () => {
    return (
        <>
            <ChakraWithImage />
            <AstrologyHero />
            <OurStory />
                        <HealthCheckupCarousel />

            <MedicalReport />
            <CenterOfExcellence />
            <DoctorProfile/>
            <Gallery images={Hospitalimages} />
        </>
    )
}

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/doctors' element={<Doctors />} />
                <Route path='/document' element={<Document />} />
                <Route path="/" element={<FirstPages />} />
                <Route path="/gallery" element={<GalleryContent />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
