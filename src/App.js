import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import Service from '../src/components/Service/Service';
import Contact from '../src/components/Contact/Contact';
import Login from '../src/components/Login/Login';
import NotFound from '../src/components/NotFound/NotFound';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Services from './components/Services/Services';
import Menubar from './components/Shared/Menubar/Menubar';
import Footer from './components/Shared/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// import PrivateRoute from './components/PrivateRoute/PrivateRoute';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceKey">
              <Service></Service>
            </PrivateRoute>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
