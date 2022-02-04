import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dog from './Dog';
import DogList from './DogList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<DogList />} />
        <Route path=':id' element={<Dog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
