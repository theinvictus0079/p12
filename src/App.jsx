import './App.css'
import Project from './components/Project'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Home from './components/Home'
import CustomCursor from './CUSTOM_UI/CustomCursor'
import Service from './components/Service'
import React,{ useRef } from 'react'
import Contact from './components/Contact'

function App() {

    const firstPageRef = useRef(null);
    const secondPageRef = useRef(null);
    const thirdPageRef = useRef(null);
    const fourthPageRef = useRef(null);
    const fifthPageRef = useRef(null);

    const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <>
      <div className=' overflow-hidden pt-5  bg-neutral-400 ' >
      <div className='  '><CustomCursor /></div>
          
          <div className='z-50  '>
          <Header
           scrollToFirstPage={() => scrollToSection(firstPageRef)}
           scrollToSecondPage={() => scrollToSection(secondPageRef)}
           scrollToThirdPage={() => scrollToSection(thirdPageRef)}
           scrollToFourthPage={() => scrollToSection(fourthPageRef)}
           scrollToFifthPage={()=> scrollToSection(fifthPageRef)}
          />
          </div>
          
          <div className=' '>
            <div ref={firstPageRef} className='md:mt-32 '><Home/></div>
            <div ref={secondPageRef} ><AboutMe/></div>
            <div ref={thirdPageRef} ><Project/></div>
            <div ref={fourthPageRef} ><Service/></div>
            <div ref={fifthPageRef} ><Contact/></div>
          </div>

      </div>
    </>
  )
}

export default App
