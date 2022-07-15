
import AppInfo from '../app-info/app-info';
import SeachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../emploees-list/emploees-list'
import EmployeesAddForm from '../emploees-add-form/employees-add-form';

import '../search-panel/search-panel.css'
import './app.css';

function App() {
	return (
		<div className="app">
			<AppInfo/>
			<div className="search-panel">
				<SeachPanel/>
				<AppFilter/>
			</div>
			<EmployeesList/>
			<EmployeesAddForm/>
		</div>
	);
}

export default App;