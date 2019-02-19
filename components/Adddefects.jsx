import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Decide from './Decide.jsx'
import Details from './Details.jsx'
import Defect from './Defect.jsx'
import {reactLocalStorage} from 'reactjs-localstorage';
class Adddefects extends React.Component {
	constructor(props){
			super(props);
			this.state={'categor':'',
						'Priorit':'',
						'descr':''	,		
						'defects1':[]
			}
						
			this.add=this.add.bind(this);
			this.cate=this.cate.bind(this);
			this.prio=this.prio.bind(this);
			this.sub=this.sub.bind(this);
		}
			add(e){
				e.preventDefault();
				if(e.target.value!=" " || e.target.value!=""){
					this.setState({descr:e.target.value});
				}
			}
			cate(e){
				e.preventDefault();
				if(e.target.value!=" " || e.target.value!=""){
					this.setState({categor:e.target.value});
				}
			}
			prio(e){
				e.preventDefault();
				if(e.target.value!=" " || e.target.value!=""){
					this.setState({Priorit:e.target.value});
				}
			}
			sub(e){
				
				e.preventDefault();
				if(this.state.categor=='' || this.state.Priorit=='' || this.state.descr==''){
					alert("Please fill out all the fields");
				}
				else{
					var arr1=this.state.defects1;
					var arr={'category':this.state.categor,'descr':this.state.descr,'priority':this.state.Priorit,'stat':'Open','changestat':'Close Defect'}					
					arr1.push(arr)
					console.log(this.state.defects1)
					reactLocalStorage.setObject('arra', arr1);
					//console.log(arr);
					alert("Successfully Added");
					}
			}
	render(){
		
		return(
			<div>
					<center><span className="decide"><Link to='/Decide'>Back</Link></span> &nbsp; <span className="decide"><Link to='/'>Logout</Link></span></center>
					<br/><br/>
					<div className="add">
						<p align="center" style={{'font-size':'30px'}}>Add a Defect</p>
						Category <select name="All" value={this.state.categor} onChange={this.cate}>
											<option value="All">Select</option>
											<option value="UI" >UI</option>
											<option value="Funtionality" >Funtionality</option>
											<option value="Other" >Other</option>
											<option value="Backend" >Backend</option>
										</select><br/><br/>
						<form onSubmit={this.sub}> 
						Description <textarea rows="3" cols="30" placeholder="Enter the Description of the Defect..." ref="desc" value={this.state.descr} onChange={this.add}></textarea><br/><br/>
						Priority <input type="text" ref="cate" value={this.state.Priorit} onChange={this.prio}></input><br/><br/>
						<button type="submit" className="button"> Add defect</button>
						</form>				
						<br/>
					</div>
			</div>);
		
	}
};
export default Adddefects;
