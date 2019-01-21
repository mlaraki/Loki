import React, { Component } from 'react';
import '../../node_modules/bulma/css/bulma.css'
import Navbar from '../Components/Navbar'
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

export default class Binomial extends Component { 
	constructor(){
		super();
		
		this.state = { 
			dt :'',
			So: '',
			K: '',
			r: '',
			t: '',
			v: '',
			optiontypeCP: '',
			optiontypeAE: '',
			optiontypeV: 'yes',
			cheat : 'no'
			  
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);
		this.handleRadio1Change = this.handleRadio1Change.bind(this);
		this.handleRadio2Change = this.handleRadio2Change.bind(this);

}

handleChange (event) {
	this.setState({ [event.target.name]: Number(event.target.value) });
	
};

handleRadioChange(event) {
	this.setState({
		 optiontypeCP: event.target.value,
		 
	});
  }

  handleRadio1Change(event) {
	this.setState({
		 optiontypeAE: event.target.value,
		 
	});
  }
  
  handleRadio2Change(event) {
	this.setState({
		 optiontypeV: event.target.value,
		 
	});
  }

  render () {  
	let data = {
		name: '',
		children: [{
			name: 'B' , children: [{ name:'D'},{name:'E'}] 
		}, {
			name: 'C', children: [{ name:'E'},{name:'G'}]
		},
		]
	};  


      return (

		  
<div className="Home">
	<head>

	</head>
	<Navbar/>

	<div className="columns" style={{marginLeft:"20px" , marginRight:"20px" }}>


		<div className="column is-half" style={{marginTop:"100px",  marginBottom:"50px"}}>
			<div className="box">
			<div>
					 <h1>Binomial Model</h1>
				 </div>
				 <hr/>
				<div class="field is-horizontal">
  					<div class="field-label is-normal">
   					<label class="label">Call or Put ?</label>
 					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
    					<div class="field">
							<div class="control" style={{marginTop:"1.3%"}}>
				 	
					 			<label class="radio">
								 <input type="radio" value='Call' checked={this.state.optiontypeCP === 'Call'} onChange={this.handleRadioChange} />
					   Call
					 			</label>
								<label class="radio">
								<input type="radio" value='Put' checked={this.state.optiontypeCP === 'Put'} onChange={this.handleRadioChange}/>

					   Put
					 			</label>
			   				</div>
   						</div>
  					</div>
				</div>

				

				<div class="field is-horizontal">
  					<div class="field-label is-normal">
   						 <label class="label">European or American ?</label>
 					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
    					<div class="field">
							<div class="control" style={{marginTop:"1.3%"}}>
				 	
					 			<label class="radio">
								 <input type="radio" value='European' checked={this.state.optiontypeAE === 'European'} onChange={this.handleRadio1Change}/>
					   European
					 			</label>
								<label class="radio">
								<input type="radio" value='American' checked={this.state.optiontypeAE === 'American'} onChange={this.handleRadio1Change}/>
					   American
					 			</label>
			   				</div>
   						</div>
  					</div>
				</div>


				<div class="field is-horizontal">
  					<div class="field-label is-normal">
    					<label class="label">Number of Timesteps</label>
  					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
   						<div class="field">
      						<p class="control">
        						<input class="input" type="number" placeholder="2" name='dt' />
      						</p>
    					</div>
  					</div>
				</div>

				<div class="field is-horizontal">
  					<div class="field-label is-normal">
    					<label class="label">Initial Asset Price (So)</label>
  					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
   						<div class="field">
      						<p class="control">
        						<input class="input" type="number" placeholder="52" name='So' />
      						</p>
							  
    					</div>
  					</div>
				</div>


				<div class="field is-horizontal">
  					<div class="field-label is-normal">
    					<label class="label">Strike Price (K)</label>
  					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
   						<div class="field">
      						<p class="control">
        						<input class="input" type="number" placeholder="50" name='K' />
      						</p>
							  
    					</div>
  					</div>
				</div>


				<div class="field is-horizontal">
  					<div class="field-label is-normal">
    					<label class="label">Risk-free rate (r)</label>
  					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
   						<div class="field">
      						<p class="control">
        						<input class="input" type="number" placeholder="0.12" name='r' />
      						</p>
    					</div>
  					</div>
				</div>


				<div class="field is-horizontal">
  					<div class="field-label is-normal">
    					<label class="label">Time in months (t)</label>
  					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
   						<div class="field">
      						<p class="control">
        						<input class="input" type="number" placeholder="3" name='t'/>
      						</p>
    					</div>
  					</div>
				</div>


				<div class="field is-horizontal">
  					<div class="field-label is-normal">
   						 <label class="label">Do you have a given volatility ?</label>
 					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
    					<div class="field">
							<div class="control" style={{marginTop:"1.3%"}}>
				 	
					 			<label class="radio">
					   				<input type="radio" value='yes' checked={this.state.optiontypeV === 'yes'} onChange={this.handleRadio2Change}/>
					   Yes
					 			</label>
								<label class="radio">
					   				<input type="radio" value='no' checked={this.state.optiontypeV === 'no'} onChange={this.handleRadio2Change} />
					   No
					 			</label>
			   				</div>
   						</div>
  					</div>
				</div>

				<div class="field is-horizontal" style={{display: this.state.optiontypeV =='yes' ? 'flex' : 'none'}}>
  					<div class="field-label is-normal">
    					<label class="label">Volatility (v)</label>
  					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
   						<div class="field">
      						<p class="control">
        						<input class="input" type="number" placeholder="0.25" name='v'/>
      						</p>
    					</div>
  					</div>
				</div>

				<div class="field is-horizontal" style={{display: this.state.optiontypeV =='yes' ? 'none' : 'flex'}}>
  					<div class="field-label is-normal">
    					<label class="label">Enter the asset growth factor u (between 0 and 1):</label>
  					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
   						<div class="field">
      						<p class="control">
        						<input class="input" type="number" placeholder="0.3" name='u'/>
      						</p>
    					</div>
  					</div>
				</div>
				<br/>
				<a class="button is-info" onClick={this.handleCheatClick} >Cheat</a>
	<br/>

			</div>
		</div>


		<div className="column is-half" style={{marginTop:"100px"}}>
			<div className="box">
			<Tree
	data={data}
	height={400}
	width={400}
	/>
	  

			</div>
		</div>
	
	</div>
		
		
</div>






	    );
	  }
	}