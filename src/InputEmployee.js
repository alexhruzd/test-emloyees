import React from "react";
import { connect } from "react-redux";
import { addEmployee, firstNameInputChange, lastNameInputChange } from "./redux/actions";

const InputEmployee = (props) => {
  const {
    firstName,
    lastName,
    onChangeFirstName,
    onChangeLastName,
    onAddNewEmployee,
  } = props;
  return (
    <form
      className="col s6 pt-4"
      onSubmit={(e) => {
        e.preventDefault();
        onAddNewEmployee();
      }}
      style={{ marginTop: "10px" }}
    >
      <div className="input-field">
        <input
          placeholder="Введите имя"
          id="first_name"
          type="text"
          className="validate"
          value={firstName}
          onInput={ (e)=> onChangeFirstName(e.target.value)}
        />
        <label className="active" htmlFor="first_name">
          Имя
        </label>
      </div>
      <div className="input-field">
        <input
          placeholder="Введите фамилию"
          id="last_name"
          type="text"
          className="validate"
          value={lastName}
          onInput={ (e)=> onChangeLastName(e.target.value)}
        />
        <label className="active" htmlFor="last_name">
          Фамилия
        </label>
      </div>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Добавить
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.inputFirstName,
    lastName: state.inputLastName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFirstName: (text) => {
      dispatch(firstNameInputChange(text));
    },
    onChangeLastName: (text) => {
      dispatch(lastNameInputChange(text));
    },
    onAddNewEmployee: () => {
      dispatch(addEmployee());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(InputEmployee);
