import React from 'react';
import styles from '../Layout/Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Sistema de Cadastro de Funcionários</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Desenvolvido por LuizJ</p>
      </footer>
    </div>
  );
};

export default Layout;
