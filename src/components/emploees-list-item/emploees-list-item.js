import { Component } from 'react';
import './emploees-list-item.css';

class EmployeesListItem extends Component {
	constructor({ name, salary, increase = false }) {
		super();

		this.name = name;
		this.salary = salary;
		this.state = {
			increase: increase,
			liked: false
		}
	}

	addIncrease = (e) => {
		this.setState(({increase}) => {
			return {increase: !increase}
		});
	}

	setLike = () => {
		this.setState(({liked}) => {
			return {liked: !liked}
		});
	}

	render() {
		const className = `list-group-item d-flex justify-content-between ${this.state.increase ? "increase" : ""} ${this.state.liked ? "like" : ""}`;
		return (
			<li className={className} >
				<span className="list-group-item-label" onClick={this.setLike}>{this.name}</span>
				<input type="text" className="list-group-item-input" defaultValue={this.salary + '$'} />
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm" onClick={this.addIncrease}>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
						className="btn-trash btn-sm ">
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li >
		)
	}
}

export default EmployeesListItem;