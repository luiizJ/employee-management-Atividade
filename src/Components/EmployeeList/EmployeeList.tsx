import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import styles from '../EmployeeList/EmployeeList.module.scss';

interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
}

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div className={styles.list}>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          role={employee.role}
          email={employee.email}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
