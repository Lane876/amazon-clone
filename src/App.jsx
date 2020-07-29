import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { StateContext } from "./StateProvider";
import { auth } from "./components/firebase";

function App() {

  const [{user}, dispatch] = useContext(StateContext)


  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          payload: authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          payload: null
        })
      }
    })


    return ()=>{
      unsubscribe()
    }
  },[])


  console.log('User is>>>>', user);


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
