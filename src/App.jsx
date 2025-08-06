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
import * as authService from './services/authService.js'
import { useState } from 'react'

const App = () => {

  const handleSignUp = async (formData) => {
   const res = await authService.signUp(formData)
   console.log(res)
  }

  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<h1>Hello world!</h1>} />
          <Route path='/sign-up' element={<SignUp handleSignUp={handleSignUp} />} />
          <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App