import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp, logIn } from 'redux/auth/auth-operations';
import { ReactComponent as GoogleIcon } from '../../images/icons/google.svg';
import { Link } from 'react-router-dom';

import s from './AuthForm.module.css';

//validate
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'components/SignIn/TextField';

// const BASE_URL = 'https://team-project-back-end.herokuapp.com/api/auth/google';
// const BASE_URL = 'http://localhost:4000/api/auth/google';
const BASE_URL = 'https://team-project-back-end.vercel.app/api/auth/google';

const AuthForm = () => {
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

  // // Зайти
  const handleSignIn = evt => {
    const user = { email, password };
    dispatch(logIn(user));
  };

  // // Реєстрація
  const handleSignUp = () => {
    const user = { email, password };
    dispatch(signUp(user));
  };

  //Validate
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(9, 'Password must be at least 9 charaters')
      .required('Password is required'),
  });

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
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validate}
            >
              {formik => (
                <div className={s.formWrapper}>
                  <Form className={s.authForm} onChange={handleChange}>
                    <p className={s.formText}>
                      You can use your Google Account to authorize:
                    </p>

                    <a
                      className={s.authButton}
                      // href="https://www.google.com/"
                      href={`${BASE_URL}`}
                    >
                      <GoogleIcon />
                      Google
                    </a>

                    <p className={s.loginText}>
                      Or login to our app using e-mail and password:
                    </p>
                    <div className={s.inputsWrapper}>
                      <TextField
                        className={s.inputForm}
                        name="email"
                        type="email"
                        value={email}
                        placeholder="E-mail"
                      />
                      <TextField
                        className={s.inputForm}
                        name="password"
                        type="password"
                        value={password}
                        placeholder="Password"
                      />
                    </div>
                    <div className={s.btnsWrapper}>
                      <Link
                        to="/"
                        className={s.formButton}
                        onClick={handleSignIn}
                      >
                        Sign in
                      </Link>

                      <button
                        className={s.formButton}
                        onClick={handleSignUp}
                        type="button"
                      >
                        Sign up
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthForm;
