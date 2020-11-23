export const FIRST_NAME_INPUT_CHANGE = "FIRST_NAME_INPUT_CHANGE";
export const LAST_NAME_INPUT_CHANGE = "LAST_NAME_INPUT_CHANGE";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const SET_EMPLOYEES = "SET_EMPLOYEES";

export const firstNameInputChange = (text) => ({
  type: FIRST_NAME_INPUT_CHANGE,
  text,
});
export const lastNameInputChange = (text) => ({
  type: LAST_NAME_INPUT_CHANGE,
  text,
});
export const addEmployee = () => ({ type: ADD_EMPLOYEE });
export const deleteEmployee = (id) => ({ type: DELETE_EMPLOYEE, id });
export const setEmloyees = (data) => ({type: SET_EMPLOYEES, data});
