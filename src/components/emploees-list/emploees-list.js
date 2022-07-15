import EmployeesListItem from "../emploees-list-item/emploees-list-item";

import './employees-list.css';

const EmployeesList = () => {
	return (
		<ul className="app-list list-group">
			<EmployeesListItem />
			<EmployeesListItem />
			<EmployeesListItem />
		</ul>
	)
}

export default EmployeesList;