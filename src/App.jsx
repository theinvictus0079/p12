import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  

  return (
    <>
      <div >

          <div><Header/></div>
          
          <div className=''>
            <div className='md:mt-32 '><Home/></div>
          </div>

      </div>
    </>
  )
}

export default App
