import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import Contact from "./Example/Contact";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Nav/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/user" exact>
            <ListUser/>
          </Route>
          <Route path="/user/:id">
            <DetailUser/>
          </Route>
        </Switch>
        {/* <MyComponent/> */}
        {/* <ListTodo /> */}
        
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
