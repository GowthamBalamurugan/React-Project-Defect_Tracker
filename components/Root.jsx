 import React from 'react'; 
 import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
 import LoginForm from './LoginForm.jsx'
 import Defect from './Defect.jsx'
 import Decide from './Decide.jsx'
 import Adddefects from './Adddefects.jsx'
 class Root extends React.Component{
	 render(){
		 return(<Router>
				<div>
					<Route exact path = "/" component = {LoginForm} />
					<Route path = "/Decide" component = {Decide} />
					<Route path = "/Adddefects" component = {Adddefects} />
					<Route path = "/Defect" component = {Defect} />
				</div>
			</Router>);

	 }
 }
	 
	 
	 
export default Root;
