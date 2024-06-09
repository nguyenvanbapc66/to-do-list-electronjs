import React from 'react';

import { TodoList } from './components';
// import { styles } from './constants';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContent}>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
