import React from 'react';
import styles from '../EmployeeCard/EmployeeCard.module.scss';

interface EmployeeCardProps {
  name: string;
  role: string;
  email: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, role, email }) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>Cargo: {role.toUpperCase()}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default EmployeeCard;
