import About from './About'
import Home from './Home.jsx'
import { Route, Routes , Link, NavLink} from 'react-router'


function App() {
  

  return (
    <>
    <Link to="/" >Home</Link>
    <br />
    <Link to="/about" >About</Link>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />

     </Routes>
    </>
  )
}

export default App
