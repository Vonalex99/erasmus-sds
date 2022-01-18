import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import database from './Components/CreateLaComponents/Courses.json'
import db from './firebase.js'
import { ref, onValue} from "firebase/database";
import {auth} from './firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
console.log(db)
var user = "noUser"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      database: [],
      logInUser: "noUser",
      loginEmail: "",
      loginPassword: ""
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  async login(loginEmail, loginPassword) {
    console.log(loginEmail)
    console.log(loginPassword)
    var user
    try {
      var user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      
    } catch (error) {
      console.log(error.message);
      alert(error.message)
    }

    
  };

  ola(user) {
    const starCountRef = ref(db);
    var data = {}
    onValue(starCountRef, (snapshot) => {
      data = snapshot.val();
      this.setState({logInUser: user})
    });
  }

  componentDidMount() {
    this.getResumeData();

    const starCountRef = ref(db);
    var data = {}
    onValue(starCountRef, (snapshot) => {
      data = snapshot.val();
      this.setState({ database: data });
    });

    console.log(data)

    

  }

  render() {
    return (
      <div className="App">
        <Header auth={auth} data={this.state.resumeData.main} db={db} logInUser={this.state.logInUser} logIn={this.login} />
        <About data={this.state.resumeData.main} />
        <Resume auth={auth} data={this.state.resumeData.resume} database={this.state.database}/>
        <Portfolio  auth={auth} data={this.state.resumeData.portfolio} database={this.state.database} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
