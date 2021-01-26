import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import HomePage from './home/Home.js';
import LoginPage from './login/Login.js';
import SignupPage from './login/Signup.js';
import LivingPage from './living/Living.js';


// function App() {
//   return (
//     <div>
//       {/* <HomePage />        */}
//     </div>
//   );
// }

// function App() {
//     return (
//       <main>
//       <Switch>
//         <div>
//           <header>
//           </header>
//           <Route path="/" component={HomePage} exact />
//           <Route path="/login" component={LoginPage} />
//           {/* <Route path="/shop" component={Shop} />  */}
//           <Route component={Error} />
//         </div>
//       </Switch>
//       </main>
//     );
//   }

//   function Navbar() {
//     return (
//       <div>
//         <Link to="/">Home</Link>
//         {/* <Link to="/login">About Us </Link> */}
//         {/* <Link to="/shop">Shop Now </Link> */}
//       </div>
//     );
//   };

//   export default App;
  
export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link> */}

            {/* <Link to="/login">Login</Link> */}
        {/* </nav> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/living-room">
            <LivingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }