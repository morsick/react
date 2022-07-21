import { Component } from 'react';
import './employees-add-form.scss';
import nextId from "react-id-generator";

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			salary: ''
		}

		this.addItem = (e) => {
			e.preventDefault();
			const itemInfo = {...this.state, ...{id: nextId()}};
			props.addItem(itemInfo);
		};
	}

	updateEmployeInfo = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex">
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name="name"
						onChange={this.updateEmployeInfo}
						value={this.state.name} />

					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name="salary"
						onChange={this.updateEmployeInfo}
						value={this.state.salary} />

					<button type="submit"
						className="btn btn-outline-light"
						onClick={this.addItem}>Добавить</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;