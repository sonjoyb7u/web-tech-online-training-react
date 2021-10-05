// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Error404 from './pages/ErrorPage/Error404/Error404'
import Footer from './components/Footer/Footer'
import About from './pages/About/About';
import AllCourses from './pages/AllCourses/AllCourses';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import ReviewOrder from './pages/ReviewOrder/ReviewOrder';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import ContactUs from './pages/ContactUs/ContactUs';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about-us">
            <About></About>
          </Route>
          <Route exact path="/all-courses">
            <AllCourses></AllCourses>
          </Route>
          <Route exact path="/course-detail/:courseId">
            <CourseDetail></CourseDetail>
          </Route>
          <Route exact path="/review-order">
            <ReviewOrder></ReviewOrder>
          </Route>
          <Route exact path="/place-order">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <Error404></Error404>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
