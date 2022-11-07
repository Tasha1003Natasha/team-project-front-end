import s from './Loader.module.css';

export const Loader = () => (
  <>
    <div className={s.load_wrapp}>
      <div className={s.load_3}>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
    </div>
  </>
);

