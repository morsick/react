import './app-info.css';

const AppInfo = (props) => {
	const { data } = props;
	const totalEmployes = data.length;
	let increaceEmployes = 0;
	data.forEach(item => item.increase && (increaceEmployes++));
	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании</h1>
			<h2>Общее число сотрудников: {totalEmployes}</h2>
			<h2>Премию получат: {increaceEmployes}</h2>
		</div>
	)
}

export default AppInfo;