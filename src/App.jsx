import React, { useEffect } from 'react'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import toast, { Toaster } from 'react-hot-toast';

import Register from './Components/Register/Register';
import ForgotPassword from './Components/Register/ForgotPassword';
import ResetPassword from './Components/Register/ResetPassword';
import About from './Components/About/About';
import PaymentSucess from './Components/Payments/PaymentSucess';
import PaymentFail from './Components/Payments/PaymentFail';
import Subscription from './Components/Payments/Subscription';
import Course from './Components/Courses/Course';
import Profile from './Components/Profile/Profile';
import UpdateProfile from './Components/Profile/UpdateProfile';
import ChangePassword from './Components/Profile/ChangePassword';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateCourse from './Components/Dashboard/CreateCourses';
import User from './Components/Dashboard/User';
import Request from './Components/Request/Request';
import AdminCourses from './Components/Admin/AdminCourses';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Components/Actions/user';
import Loader from './Components/Loader/Loader';
import Contact from './Components/Request/Contact';
const App = () => {
  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );
  const dispatch =useDispatch()
  useEffect(() => {
    console.log(user)
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />
     {loading ? (<Loader/>):( <Routes>
        <Route path='/'  element={isAuthenticated?(<Home/>):( <Login/>)}/>
        <Route path='/courses'element={isAuthenticated?(<Courses/>):( <Login/>)}/>
        {/* <Route path='/course' element={<Course/>} /> */}


        <Route path='/login' element={isAuthenticated?(<Home/>):( <Login/>)
         }
       />
        <Route path='/profile' element={isAuthenticated?(<Profile user={user}/>):( <Login/>)
         }
         />

        <Route path='/updateprofile' element={<UpdateProfile/>} />
        <Route path="/contact" element={<Contact />} />

        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/admin/dashboard' element={isAuthenticated && user.role=='admin' ?(<Dashboard/>):(<Home/>)} />
        <Route path='/admin/createcourse' element={<CreateCourse/>} />
        <Route path='/admin/users' element={<User/>} />
        <Route path='/admin/courses' element={<AdminCourses/>} />




        <Route path='/register'element={isAuthenticated?(<Home/>):( <Register/>)
         } />
        <Route path='/course/:id' element={<Course user={user}/>} />

        <Route path='/forgotPassword' element={<ForgotPassword/>} />
        <Route path='/resetpassword/:token' element={<ResetPassword/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/request" element={<Request />} />

        <Route path='/paymentsuccess' element={<PaymentSucess/>}/>
        <Route path='/paymentfail' element={<PaymentFail/>} />
        <Route path='/subscribe' element={<Subscription  user={user}/>} />


      </Routes>)}
<Toaster/>
   <Footer/>
</Router>
  )
}

export default App