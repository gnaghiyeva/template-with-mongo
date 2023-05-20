import { BASE_URL } from "./base_url";
import axios from "axios";

//get all Employees
export const getAllEmployees = async () => {
  let globalData;
  await axios.get(`${BASE_URL}/employees`).then((res) => {
    globalData = res.data;
    });
    return globalData

};
//get Employee by ID
export const getEmployeeByID = async (ID) => {
  let globalData;
  await axios.get(`${BASE_URL}/employees/${ID}`).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};

//delete Employee by  ID
export const deleteEmployeeByID = async (ID) => {
  let deletedEmployee;
  await axios.delete(`${BASE_URL}/employees/${ID}`).then((res) => {
    deletedEmployee = res.data.data;
  });

  return deletedEmployee;
};
//post Employee
export const postEmployee = (newEmployee) => {
  axios.post(`${BASE_URL}/employees`, newEmployee);
};

export const editEmployee = (id,payload)=>{
  axios.put(`${BASE_URL}/employees/${id}`,payload);
}