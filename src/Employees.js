import React from "react";
import { connect } from "react-redux";
import {deleteEmployee} from './redux/actions'

const Employees = (props) => {
  const { empList, onDeleteEmployee } = props;

  const employees = empList.map((emp) => {
    return (
      <li className="collection-item" key={emp.id}>
        <span>{emp.firstName} </span>
        <span>{emp.lastName}</span>

        <button
          style={{ top: "-6px" }}
          type="button"
          className="waves-effect btn-small red secondary-content top_butt"
          onClick={() => onDeleteEmployee(emp.id)}
        >
          &times;
        </button>
      </li>
    );
  });

  return (
    <div className="col s6">
      <ul className="collection">{employees}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    empList: state.empList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteEmployee: (id) => {
      dispatch(deleteEmployee(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
