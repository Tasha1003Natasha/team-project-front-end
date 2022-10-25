import { ReactComponent as GoogleIcon } from '../../images/icons/google.svg';

import s from './AuthPage.module.css';

const AuthPage = () => {
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
                    placeholder="E-mail"
                  />
                  <input className={s.inputForm} type="password" />
                </div>
                <div className={s.btnsWrapper}>
                  <button className={s.formButton}>Sign in</button>
                  <button className={s.formButton}>Sign up</button>
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
