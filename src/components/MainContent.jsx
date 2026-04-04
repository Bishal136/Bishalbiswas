import React from 'react'
import Navigation from './Navigation'
import AboutMe from './AboutMe'
// import { Skills } from './Skills'
// import Protfolio from './Protfolio'
import Protfolio1 from './Protfolio1'
import { Skills1 } from './Skills1'


const MainContent = () => {
    return (
        <div className='main-content bg-[#2a2a2a] border-2 border-[#3a3a3a] rounded-2xl p-10 '>

            {/* navigation */}
            <Navigation />

            {/* about me */}
            <AboutMe />

            {/*  skills section */}
            
            <Skills1/>
            
            {/* Portfolio SECTION  */}
            <Protfolio1/>
        
        </div>
    )
}

export default MainContent