import React from 'react';
import Details from './Details.jsx';
import Adddefects from './Adddefects.jsx';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
	class Defect extends React.Component{
		constructor(props){
			super(props);
			this.state={
					'defects':[],
					'priority':'',
					'category':'',
					'temp':[],
					}
			this.filter=this.filter.bind(this);
			this.filter1=this.filter1.bind(this);
		}
		filter(e){
			e.preventDefault();
			var name=e.target.name
			console.log(name)
			this.setState({'priority':e.target.value});
		}
		filter1(e){
			e.preventDefault();
			this.setState({'category':e.target.value});
			
		}
		changestatus(index, e){
			var new1=Object.assign([], this.state.defects);
			var new2=new1[index]['stat']='Closed'
			var new3=new1[index]['changestat']='No Action Pending'
			//new1.splice(index, 1);
			this.setState({'defects':new1});
			//console.log(reactLocalStorage.get('Priorit'))
			}
		deletetask(index, e){
			var new1=Object.assign([], this.state.defects);
			new1.splice(index, 1);
			this.setState({'defects':new1});
			}

		localcall(){
			var a=this;
			$.get('./components/defectdetails.json', function(d){
				//console.log(d);
				a.setState({'defects':d});
				console.log(this.state.defects)
			 });
		}
		componentDidMount(){
			this.localcall();
			 var temp=reactLocalStorage.getObject('arra');
			var temp1=temp[0]
			//console.log(temp1)
			if(temp1!=undefined){
				this.setState({defects: this.state.defects.concat(temp)})
			}
			 
								
		}
		//refreshPage(){
			//window.parent.location = window.parent.location.href;
		//}

		render(){	
							
						var new1=[]
						this.state.defects.forEach(function(element, index){
								if(element.priority==this.state.priority && element.category==this.state.category){
										new1.push(<Details key={index} category={element.category} desc={element.descr} priority={element.priority} stat={element.stat} changestat={element.changestat}  closing={this.changestatus.bind(this, index)} remove={this.deletetask.bind(this, index)}/>);}
								
								else if((element.priority==this.state.priority)&&(this.state.category=="" || this.state.category==this.state.defects.length)) {
									new1.push(<Details key={index} category={element.category} desc={element.descr} priority={element.priority} stat={element.stat} changestat={element.changestat}  closing={this.changestatus.bind(this, index)} remove={this.deletetask.bind(this, index)}/>);}
								else if(this.state.priority=="" || this.state.priority==this.state.defects.length){
									new1.push(<Details key={index} category={element.category} desc={element.descr} priority={element.priority} stat={element.stat} changestat={element.changestat} closing={this.changestatus.bind(this, index)} remove={this.deletetask.bind(this, index)}/>);}
								}.bind(this));	
						
			return (
					<div>
						<center><span className="decide"><Link to='/Decide'>Back</Link></span> &nbsp; <span className="decide"><Link to='/'>Logout</Link></span></center>
						<br/><br/>
						<div className="filter">
							<span>Filter the Records</span><br/><br/>
									Priority <select name="priority" value={this.state.priority} onChange={this.filter}>
										<option value={this.state.defects.length}>All</option>
										<option value="1"  >1</option>
										<option value="2" >2</option>
										<option value="3">3</option>
									</select><br/><br/>
									Category <select name="category" value={this.state.category} onChange={this.filter1}>
										<option value={this.state.defects.length}>All</option>
										<option value="UI" >UI</option>
										<option value="Funtionality" >Funtionality</option>
										<option value="Other" >Other</option>
										<option value="Backend" >Backend</option>
									</select>
						</div>
						<br/><br/><br/><br/>
						<div>
						<br/><br/>
							<h3>Defect Details</h3>
							<span> Records found: {new1.length}</span><br/><br/>
								<table align="center" border='1px' className="table">
									<thead>
										<th>DefectCategory</th>
										<th>Description</th>
										<th>Priority</th>
										<th>Status</th>
										<th>Change Status</th>
										<th>Remove Defect</th>
									</thead>
									<tbody>
											{new1}
									</tbody>
								</table>
						</div>						
					</div>);
		}
};
export default Defect;	






