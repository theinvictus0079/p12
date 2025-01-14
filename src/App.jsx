import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  

  return (
    <>
      <div className='overflow-hidden p-3 bg-neutral-400 ' >

          <div className='z-50'><Header/></div>
          
          <div className=' '>
            <div className='md:mt-32 '><Home/></div>
            <div className=''><AboutMe/></div>
          </div>

      </div>
    </>
  )
}

export default App
