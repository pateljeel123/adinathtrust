import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Doctors from './Components/Doctors'
import MedicalReport from './Components/Account'
import AstrologyHero from './Components/AstrologyHero'
import CenterOfExcellence from './Components/CenterOfExcellence'
import { Hospitalimages } from './Components/Centers_Data'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import ChakraWithImage from './Components/Hero'
import OurStory from './Components/OurStory'

const FirstPages = () => {
    return (
        <>
            <ChakraWithImage />
            <AstrologyHero />
            <OurStory />
            <MedicalReport />
            <CenterOfExcellence />
            <Gallery images={Hospitalimages} />
        </>
    )
}

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/doctors' element={<Doctors />} />
                <Route path="/" element={<FirstPages />} />
            </Routes>
        </div>
    )
}

export default AllRoutes