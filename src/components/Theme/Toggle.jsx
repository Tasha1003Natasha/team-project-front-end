import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { FaSun, FaMoon } from 'react-icons/fa';

import { set } from '../../redux/theme/theme-slice';

import styles from './Toggle.module.css';

export const Toggle = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(set(next));
  };

  return (
    <div className={styles.header} onClick={handleChange}>
      {theme === 'dark' ? (
        <FaSun className={styles.sun} />
      ) : (
        <FaMoon className={styles.moon} />
      )}
    </div>
  );
};

export default Toggle;
