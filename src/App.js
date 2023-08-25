import './App.css';
import TodoApp from './Components/TodoList/TodoApp';
import Navbar from './Components/Products/Navbar';
import Products from './Components/Products/Products';


function App() {
  return (
    <div>
      <Navbar/>
      <Products/>
      {/* <TodoApp/> */}
    </div>
  );
}

export default App;




// import React from 'react'
// import TodoApp from './Components/TodoList/TodoApp'

// const App = () => {
//   return (
//     <div>
//       <TodoApp/>
//     </div>
//   )
// }

// export default App





// import React from 'react';
// import FireValid from './Components/Auth/firebaseValidation';

// const App = () => {
//   return (
//     <div>
//       <FireValid/>
//     </div>
//   )
// }

// export default App




// import './App.css';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';

// function App() {
//   return (
//     <>
//       <Navbar/>
//       <Home/>
//     </>
//   );
// }

// export default App;




// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Components/Login Page/Login';
// import Signup from './Components/Login Page/Signup';
// import FireValid from './Components/Login Page/firebaseValidation';


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Login/>}></Route>
//           <Route path='/signup' element={<Signup/>}></Route>
//         </Routes>
//       </BrowserRouter>
//       <FireValid/>
//     </div>
//   )
// }

// export default App






