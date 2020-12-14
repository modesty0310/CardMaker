import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = (props) => (
      <section>
        <Header />
          <h1>Login</h1>
          <ul>
            <li><button>Google</button></li>
            <li><button>Github</button></li>
          </ul>
        <Footer />
      </section>
  );

export default Login;