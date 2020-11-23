import shortid from "shortid";
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  FIRST_NAME_INPUT_CHANGE,
  LAST_NAME_INPUT_CHANGE,
  SET_EMPLOYEES,
} from "./actions";

const initialStatte = {
  empList: [],
  inputFirstName: "",
  inputLastName: "",
};

export const reducer = (state = initialStatte, action) => {
  switch (action.type) {

    case SET_EMPLOYEES: {
      return {
        ...state,
        empList: action.data,
      }
    }

    case ADD_EMPLOYEE: {
      let newId = shortid.generate();
      let newEmploye = {
        id: newId,
        firstName: state.inputFirstName,
        lastName: state.inputLastName,
      };
      return {
        ...state,
        empList: [...state.empList, newEmploye],
        inputFirstName: "",
        inputLastName: "",
      };
    }

    case DELETE_EMPLOYEE: {
      let idEmp = state.empList.findIndex((item) => item.id === action.id);

      let newList = [...state.empList];
      newList.splice(idEmp, 1);
      return {
        ...state,
        empList: newList,
      };
    }

    case FIRST_NAME_INPUT_CHANGE: {
      return {
        ...state,
        inputFirstName: action.text,
      };
    }
    case LAST_NAME_INPUT_CHANGE: {
      return {
        ...state,
        inputLastName: action.text,
      };
    }

    default:
      return state;
  }
};
