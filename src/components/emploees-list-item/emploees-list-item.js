import './emploees-list-item.css';

const EmployeesListItem = (props) => {
	const { name, salary, liked, increase, dellItem, handleChangeIncreace, handleChangeLike } = props;
	const className = `list-group-item d-flex justify-content-between ${increase ? "increase" : ""} ${liked ? "like" : ""}`;


	return (
		<li className={className} >
			<span className="list-group-item-label" onClick={handleChangeLike}>{name}</span>
			<input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
			<div className='d-flex justify-content-center align-items-center'>
				<button type="button"
					className="btn-cookie btn-sm"
					onClick={handleChangeIncreace}>
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button"
					className="btn-trash btn-sm "
					onClick={dellItem}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li >
	)
}

export default EmployeesListItem;