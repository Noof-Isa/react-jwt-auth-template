// to cheack  the nav bar place 

// const NavBar = ({ user }) => {
//   return (
//     <>
//       <p>Hello Navbar</p>
//     </>
//   )
// }
// export default NavBar

import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
  )
}

export default NavBar 