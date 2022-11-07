import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { set } from '../../redux/theme/theme-slice';
import styles from './Toggle.module.css';

export const Toggle = ({ className }) => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === 'dak' ? 'light' : 'dark';
    dispatch(set(next));
  };

  return (
    <div
      className={cn(
        className,
        styles.root,
        theme === 'dark' ? styles.dark : styles.light
      )}
      onClick={handleChange}
    />
  );
};

export default Toggle;
