import './App.css'
import { Link, Route, Router, Routes } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signUp';
import FrogotPassword from './components/frogotPassword';
import MainPage from './components/mainPage';
import ImageUpload from './components/uploadImage';

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path='/frogotPassword' element={<FrogotPassword/>} />
      <Route path='/main' element={<MainPage/>} />
      <Route path='/uploadImage' element={<ImageUpload/>} />
    </Routes>
  )
}

export default App;
