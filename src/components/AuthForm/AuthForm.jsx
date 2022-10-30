import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn, logIn } from 'redux/auth/auth-operations';
import { ReactComponent as GoogleIcon } from '../../images/icons/google.svg';
// import { Link } from 'react-router-dom';

import s from './AuthForm.module.css';

const AuthForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    switch (evt.currentTarget.name) {
      case 'email':
        setEmail(evt.currentTarget.value);
        break;
      case 'password':
        setPassword(evt.currentTarget.value);
        break;
      default:
        return;
    }
  };

  // // Зайти
  const handleSignIn = evt => {
    evt.preventDefault();
    const user = { email, password };
    dispatch(logIn(user));
  };

  // // Реєстрація
  const handleSignUp = () => {
    const user = { email, password };
    dispatch(signIn(user));
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
              <form className={s.authForm}>
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
                    value={email}
                    onChange={handleChange}
                    placeholder="E-mail"
                  />
                  <input
                    className={s.inputForm}
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className={s.btnsWrapper}>
                  {/* <Link to="/" className={s.formButton} onClick={handleLogIn}>
                    Sign in
                  </Link> */}
                  <button
                    className={s.formButton}
                    onClick={handleSignIn}
                    type="submit"
                  >
                    Sign in
                  </button>
                  <button
                    className={s.formButton}
                    onClick={handleSignUp}
                    type="button"
                  >
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

export default AuthForm;
