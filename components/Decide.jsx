import React from 'react';						
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';			
class Decide extends React.Component {									
	    render(){
                 return (
				<div>
					<span className="decide">
						<Link to='/'>Logout</Link>
					</span>
					<br/><br/><br/><br/>
					<span className="decide"><Link to='/Adddefects'>Add Defect</Link></span> &nbsp;&nbsp;&nbsp;&nbsp; <span className="decide"><Link to='/Defect'>View Defects</Link></span>
					
				</div>);
		}
}
export default Decide;
