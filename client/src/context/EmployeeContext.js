import React, { createContext, useContext, useState } from 'react'

const EmployeeContext = createContext()
export const EmployeeContextProvider = ({children}) => {
    const [employees, setEmployees] = useState([]);

  return (
    <EmployeeContext.Provider value={[employees,setEmployees]}>
     {children}
    </EmployeeContext.Provider>
  )
}

export const useEmployeeContext = ()=> useContext (EmployeeContext)