import Head from 'next/head';
import LoginForm from '@src/modules/auth/LoginForm';
import NavLogo from '@src/modules/next-template/components/NavLogo';

export default function About() {
  return (
    <div className="mainpage">
      <NavLogo />
      <LoginForm />
      <div className="backgroundImage"></div>
    </div>
  );
}
