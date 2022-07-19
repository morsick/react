
import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SeachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../emploees-list/emploees-list'
import EmployeesAddForm from '../emploees-add-form/employees-add-form';

import '../search-panel/search-panel.css'
import './app.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{ name: 'Ilia', salary: 1555, increase: false, id: nextId() },
				{ name: 'Kate', salary: 600, increase: false, id: nextId() },
				{ name: 'Biba', salary: 15000, increase: true, id: nextId() },
			]
		};
	}

	dellItem = (id) => {
		this.setState(({data}) => {
			const newData = data.filter(userInfo => userInfo.id !== id);
			return {
				data: newData,
			}
		});
	}

	addItem = (item) => {
		if (item.name === '' || item.salary === '')
		{
			return;
		}

		this.setState(({data}) => {
			const newData = [...data, item];
			return {
				data: newData,
			}
		});
	}

	render() {
		return (
			<div className="app" >
				<AppInfo />
				<div className="search-panel">
					<SeachPanel />
					<AppFilter />
				</div>
				<EmployeesList data={this.state.data} dellItem={this.dellItem} />
				<EmployeesAddForm addItem={this.addItem}/>
			</div>
		);
	}
}

export default App;