
import './App.css'

import { BrowserRouter , Route, Routes } from 'react-router-dom'
import {HomePage} from './HomePage'
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<HomePage />}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
