import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
	class Details extends React.Component{
		constructor(props){
			super(props);
			
		}
		render(){
			
			return (
							
								<tr>
									<td>{this.props.category}</td>
									<td>{this.props.desc}</td>
									<td>{this.props.priority}</td>
									<td>{this.props.stat}</td>
									<a href="#" onClick={this.props.closing} className="link"><td>{this.props.changestat}</td></a>
									<td><button className="btn" onClick={this.props.remove}>Remove Defect</button></td>
								</tr>
							);
		}
}
export default Details;
					
								
