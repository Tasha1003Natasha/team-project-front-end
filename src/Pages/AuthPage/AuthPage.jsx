import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn, logIn } from 'redux/auth/auth-operations';
import { ReactComponent as GoogleIcon } from '../../images/icons/google.svg';

import s from './AuthPage.module.css';

const AuthPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'email':
        setEmail(evt.target.value);
        break;
      case 'password':
        setPassword(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleSignIn = evt => {
    evt.preventDefault();

    const user = { email, password };

    dispatch(signIn(user));
  };

  const handleLogIn = async evt => {
    evt.preventDefault();

    const userToLogIn = { email, password };

    dispatch(logIn(userToLogIn));
  };

  return (
    <main>
      <section className={s.authSection}>
        <div className={s.container}>
          <div className={s.authWrapper}>
            <div className={s.descriptionWrapper}>
              <h1 className={s.authTitle}>Pro Test</h1>
              <p className={s.authText}>
                <span>[</span> We will help you find weak points in knowledge so
                that you can strengthen it. We will show you what is relevant to
                know for a<span> QA Engineer</span> and will try to make the
                learning process more diverse_ <span>]</span>
              </p>
            </div>
            <div className={s.formWrapper}>
              <form className={s.authForm} onChange={handleChange}>
                <p className={s.formText}>
                  You can use your Google Account to authorize:
                </p>
                <button className={s.authButton}>
                  <a className={s.googleIcon} href="https://www.google.com/">
                    <GoogleIcon />
                    Google
                  </a>
                </button>
                <p className={s.loginText}>
                  Or login to our app using e-mail and password:
                </p>
                <div className={s.inputsWrapper}>
                  <input
                    className={s.inputForm}
                    name="email"
                    type="email"
                    placeholder="E-mail"
                  />
                  <input
                    className={s.inputForm}
                    name="password"
                    type="password"
                  />
                </div>
                <div className={s.btnsWrapper}>
                  <button className={s.formButton} onClick={handleLogIn}>
                    Sign in
                  </button>
                  <button className={s.formButton} onClick={handleSignIn}>
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
