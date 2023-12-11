import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultReactPage from './components/DefaultReactPage'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultReactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
