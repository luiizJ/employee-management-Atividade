'use client'
import { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import EmployeeForm from '../Components/EmployeeForm/EmployeeForm';
import EmployeeList from '../Components/EmployeeList/EmployeeList';
import './global.scss';

interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
}

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const handleAddEmployee = (name: string, role: string, email: string) => {
    const newEmployee: Employee = {
      id: employees.length + 1,
      name,
      role,
      email,
    };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <Layout>
      <h2>Cadastro de Funcionários</h2>
      <EmployeeForm onAddEmployee={handleAddEmployee} />
      <EmployeeList employees={employees} />
    </Layout>
  );
}
