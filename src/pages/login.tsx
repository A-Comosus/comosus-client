import Head from 'next/head';
import LoginForm from '@src/modules/auth/LoginForm';
import SignupForm from '@src/modules/auth/SignupForm';
import Navlogo from '@src/modules/next-template/components/Navlogo';

export default function About() {
  return (
    <div className="mainpage">
      <Navlogo />
      <LoginForm />
      <div className="backgroundImage"></div>
    </div>
  );
}
