import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/SplashScreen/SignIn';
import { SignUp } from '../pages/SplashScreen/SignUp';

export const AuthRoutes = () => {
  return (

    <Routes>

      <Route path = '/' element = { <SignIn /> } />
      <Route path = '/register' element = { <SignUp /> } />
      <Route path = '*' element = { <SignIn /> } />

    </Routes>

  )
}