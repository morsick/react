import { Component } from "react";
class SeachPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ""
		};
	}

	onSearchPanelChange = (e) => {
		const newTerm = e.target.value;
		this.setState(() => {
			return {term: newTerm};
		});
		this.props.onSearchPanelChange(newTerm);
	}

	render() {
		return <input
			type="text"
			className="form-control search-input"
			placeholder="Найти сотрудника"
			onChange={this.onSearchPanelChange}
			value={this.state.term} />
	}
};

export default SeachPanel;