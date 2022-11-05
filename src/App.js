import './App.css';
import { Routes, Route} from "react-router-dom"
import Homepage from './Components/Homepage'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className='index_page'>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
