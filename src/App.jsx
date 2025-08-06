// src/App.jsx

// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';

// const App = () => {
//   // const [user, setUser] = useState(null)

//   return (
//     <>
//       <NavBar  /> 
//       <Routes>
//         <Route path='/' element={<h1>Hello World</h1>} />
        
//         <Route path='/' element={<h1>404</h1>} />

//       <Routes/>
//       <h1>Hello world!</h1>
//     </>
//   )
// }

// export default App

// src/App.jsx

import './App.css'
import NavBar from './components/NavBar/NavBar'
import SignUp from './components/SignUp/SignUp'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const handleChange = (e) => {
    console.log[EventTarget.target.value]
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<h1>Hello world!</h1>} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App