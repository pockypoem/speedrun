import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
// import EditEmployee from './components/EditEmployee';
import {v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    // Array of multiple employees
    [
      {
        id: 1,
        name: "Pocky", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
      },
      {
        id: 2,
        name: "Sal", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"
      },
      {
        id: 3,
        name: "John", 
        role: "Director of Eng.", 
        img: "https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg"
      },
      {
        id: 4,
        name: "Melanie", 
        role: "Software Engineer", 
        img: "https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg"
      },
      {
        id: 5,
        name: "Corey", 
        role: "DevOps", 
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      },
      {
        id: 6,
        name: "Jake", 
        role: "Semior Intern", 
        img: "https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg"
      }
    ]
  );

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        // return new
        return {...employee, name: newName, role:newRole};
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        <>
          <input type="text" onChange={(e) => {
            setRole(e.target.value);
          }}/>
          <div className='flex flex-wrap justify-center'>
            {/* Loop through our state data */}
            {employees.map((employee) => {
              
              return(
                <Employee 
                  key= {employee.id}
                  id = {employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              )
              
            })}
          </div>
          <AddEmployee newEmployee={newEmployee}/>
        </>
      :
      <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
