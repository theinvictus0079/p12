import './App.css'
import Project from './components/Project'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Home from './components/Home'
import CustomCursor from './CUSTOM_UI/CustomCursor'
import Service from './components/Service'

function App() {
  

  return (
    <>
      <div className=' overflow-hidden pt-5  bg-neutral-400 ' >
      <div className='  '><CustomCursor /></div>
          <div className='z-50'><Header/></div>
          
          <div className=' '>
            <div className='md:mt-32 '><Home/></div>
            <div className=''><AboutMe/></div>
            <div className=''><Project/></div>
            <div className=''><Service/></div>
          </div>

      </div>
    </>
  )
}

export default App
