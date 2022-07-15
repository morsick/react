import EmployeesListItem from "../emploees-list-item/emploees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
	
	const elements = data.map(item => {
		const {id, ...itemProps} = item; 
		return <EmployeesListItem key={id} {...itemProps}/>
	});

	elements.sort((a, b) => 
	{
		return a.props.salary - b.props.salary
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployeesList;