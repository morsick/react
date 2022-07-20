import EmployeesListItem from "../emploees-list-item/emploees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, dellItem, handleChangeIncreace, handleChangeLike }) => {
	const elements = data.map(item => {
		const { id, ...itemProps } = item;
		return <EmployeesListItem key={id}
			{...itemProps}
			dellItem={() => dellItem(id)}
			handleChangeIncreace={() => { handleChangeIncreace(id) }}
			handleChangeLike={() => { handleChangeLike(id) }} />
	});

	elements.sort((a, b) => {
		return a.props.salary - b.props.salary
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployeesList;