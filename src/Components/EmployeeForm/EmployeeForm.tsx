import React, { useState } from 'react';
import styles from '../EmployeeForm/EmployeeForm.module.scss';

interface EmployeeFormProps {
  onAddEmployee: (name: string, role: string, email: string) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && role && email) {
      onAddEmployee(name, role, email);
      setName('');
      setRole('');
      setEmail('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome Do Funcionario"
        value={name}
        className={styles.inputModls}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Cargo"
        value={role}
        className={styles.inputModls}
        onChange={(e) => setRole(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        className={styles.inputModls}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className={styles.buttonModels} type="submit">Adicionar Funcionário</button>
    </form>
  );
};

export default EmployeeForm;
