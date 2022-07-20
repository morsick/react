import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterName: "all"
		};
	}

	onBtnClick = (e) => {
		const newState = e.currentTarget.getAttribute('data-filter-name');
		this.setState(() => {
			return {filterName: newState}
		});

		this.props.onSearchFilterChange(newState);
	}

	getBtnClassName = (btnName) => {
		if (btnName === this.state.filterName) {
			return "btn btn-light";
		}
		return "btn btn-outline-light";
	}

	render() {
		return (
			<div className="btn-groop">
				<div className={this.getBtnClassName("all")}
					type="button"
					data-filter-name={"all"}
					onClick={this.onBtnClick}>
					Все сотрудники
				</div>
				<div className={this.getBtnClassName("increase")}
					type="button"
					data-filter-name={"increase"}
					onClick={this.onBtnClick}>
					На повышение
				</div>
				<div className={this.getBtnClassName("salary")}
					type="button"
					data-filter-name={"salary"}
					onClick={this.onBtnClick}>
					З/П больше 1000$
				</div>
			</div>
		);
	};
}

export default AppFilter;