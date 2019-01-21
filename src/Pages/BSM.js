import React, { Component } from 'react';
import '../../node_modules/bulma/css/bulma.css'
import '../App.css';
import Navbar from '../Components/Navbar'
import ControlledInput from '../Components/input'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
var Latex = require('react-latex');
const katex = require('katex');


function _doubleFactorial(n)
{
  var val = 1;
  for(var i = n; i > 1; i-=2)
  {
    val *= i;
  }
  return val;
}


function stdNormCDF(x)
{
  var probability = 0;
  
  if(x >= 8)
  {
    probability = 1;
  }
  else if(x <= -8)
  {
    probability = 0;
  }
  else
  {
    for(var i = 0; i < 100; i++)
    {
      probability += (Math.pow(x, 2*i+1)/_doubleFactorial(2*i+1));
    }
    probability *= Math.pow(Math.E, -0.5*Math.pow(x, 2));
    probability /= Math.sqrt(2*Math.PI);
    probability += 0.5;
  }
  return probability;
}

function blackScholes(s, k, t, v, r, callPut)
{
	var price = null;

  var w = (r * t + Math.pow(v, 2) * t / 2 - Math.log(k / s)) / (v * Math.sqrt(t));
  if(callPut === "Call")
  {
		price = s * stdNormCDF(w) - k * Math.pow(Math.E, -1 * r * t) * stdNormCDF(w - v * Math.sqrt(t));
		
  }
  else // put
  {
    price = k * Math.pow(Math.E, -1 * r * t) * stdNormCDF(v * Math.sqrt(t) - w) - s * stdNormCDF(-w);
  }
  return price;
}


export default class BSM extends Component { 
	constructor(){
		super();
		
  this.state = { 
	  So: '',
	  K: '',
	  r: '',
	  t: '',
	  v: '',
	  optiontypeCP: '',
		optiontypeAE: '',
		cheat : 'no'
	    
  };
  
  this.handleChange = this.handleChange.bind(this);
  this.handleRadioChange = this.handleRadioChange.bind(this);
	this.handleRadio1Change = this.handleRadio1Change.bind(this);
	this.handleCheatClick = this.handleCheatClick.bind(this);

}


  handleChange (event) {
		this.setState({ [event.target.name]: Number(event.target.value) });
		
};
handleCheatClick (event) {


	{this.state.cheat == 'no' ? 
		this.setState({cheat: 'yes' })  : this.setState({cheat: 'no' })}
	
	
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


  

  
  render () {  
                              
      return (
<div className="Home">
<head>
        <link href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css" rel="stylesheet"/>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.css" integrity="sha384-xNwWFq3SIvM4dq/1RUyWumk8nj/0KFg4TOnNcfzUU4X2gNn3WoRML69gO7waf3xh" crossorigin="anonymous"/>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.js" integrity="sha384-UP7zD+aGyuDvxWQEDSRYcvoTxJSD82C6VvuEBktJZGo25CVhDstY9sCDHvyceo9L" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>


		</head>
        <Navbar/>
    <div className="columns">
		<div className="column is-half" style={{marginTop:"50px",marginLeft: this.state.cheat == 'no' ? "auto":"20px",marginRight: this.state.cheat == 'no' ? "auto":"20px"  }}>
         	<div className= "box" style={{boxShadow:"0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)" ,borderRadius:'30px'}}>
			 	<div>
					 <h1>Black-Scholes Model</h1>
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
    					<label class="label">Initial Asset Price (So)</label>
  					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
   						<div class="field">
      						<p class="control">
        						<input class="input" type="number" placeholder="52" name='So' onChange={this.handleChange} value={this.state.So}/>
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
        						<input class="input" type="number" placeholder="50" name='K' onChange={this.handleChange} value={this.state.K}/>
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
        						<input class="input" type="number" placeholder="0.12" name='r' onChange={this.handleChange} value={this.state.r}/>
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
        						<input class="input" type="number" placeholder="3" name='t' onChange={this.handleChange} value={this.state.t}/>
      						</p>
    					</div>
  					</div>
				</div>


				<div class="field is-horizontal">
  					<div class="field-label is-normal">
    					<label class="label">Volatility (v)</label>
  					</div>
  					<div class="field-body" style={{flexGrow:"2"}}>
   						<div class="field">
      						<p class="control">
        						<input class="input" type="number" placeholder="0.3" name='v' onChange={this.handleChange} value={this.state.v}/>
      						</p>
    					</div>
  					</div>
				</div>
				{/* blackScholes(s, k, t, v, r, callPut) */}
				{/* <p>{this.state.So + this.state.K + this.state.r + this.state.t + this.state.v}</p> */}
				<p></p>
				<br/>
				<p style={{borderStyle:"solid" , borderRadius:"30px"}}>{this.state.optiontypeCP == "Call" ? "Call price = ": "Put price ="} {Math.round(blackScholes(this.state.So, this.state.K, this.state.t/12, this.state.v, this.state.r, this.state.optiontypeCP)*100)/100}</p>
	<br/>
	<a class="button is-info" onClick={this.handleCheatClick} >Cheat</a>
         	</div>
        </div>


{/* // 2ème colonne  */}

		<div className="column is-half" style={{marginTop:"100px",marginLeft:"20px",marginRight:"20px" , flex:"auto", display: this.state.cheat =='no' ? 'none' : 'block'}} >
         	<div className= "box" style={{boxShadow:"0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)" ,borderRadius:'30px'}}> 
					 
					 {this.state.optiontypeCP == "Call" ? <div>

						<p>In this case ,<InlineMath>{String.raw`\text So={${this.state.So}} , K={${this.state.K}} , r={${this.state.r}} , \sigma={${this.state.v}} , T={${this.state.t}}/12   `}</InlineMath> </p>
						<br/>
						<p>d1=<InlineMath>{"\\frac{\\ln(So / K) + (r+ \\sigma^2 /2) *T}{\\sigma\\sqrt {}T}"}</InlineMath>   <i class="fas fa-arrow-right"></i> Formula</p>
						<p>d1=<InlineMath>{String.raw`\frac{\text ln({${this.state.So}}/{${this.state.K}}) + ({${this.state.r}} +{${this.state.v}}^2 /2) *{${this.state.t}}}{\text{${this.state.v}}\sqrt {}{${this.state.t}}}`}</InlineMath></p>
						<br/>
						<p style={{borderStyle:"groove" , borderRadius:"30px" , width:"fit-content" , marginLeft:"auto" , marginRight:"auto" , padding:"5px"}}>d1= <InlineMath>{String.raw`{${Math.round((Math.log(this.state.So / this.state.K)+(this.state.r + Math.pow(this.state.v , 2)/2)*(this.state.t /12)) / (this.state.v *Math.sqrt(this.state.t/12))*10000)/10000}}`}</InlineMath></p>
						<br/>
						<p>d2= d1- <InlineMath>{"\\sigma\\sqrt {}T"}</InlineMath>   <i class="fas fa-arrow-right"></i> Formula</p>
						<br/>
						<p style={{borderStyle:"groove" , borderRadius:"30px" , width:"fit-content" , marginLeft:"auto" , marginRight:"auto" , padding:"5px"}}>d2=<InlineMath>{String.raw`{${Math.round(((Math.log(this.state.So / this.state.K)+(this.state.r + Math.pow(this.state.v , 2)/2)*(this.state.t /12)) / (this.state.v *Math.sqrt(this.state.t/12))  -  (this.state.v *Math.sqrt(this.state.t/12)))*10000)/10000}}`}</InlineMath></p>
						<br/>
						<p>Call= <InlineMath>{"So * N(d1) - K e^{-rt} * N(d2)"}</InlineMath>   <i class="fas fa-arrow-right"></i> Formula</p>
						<p>Call= <InlineMath>{String.raw`\text ={${this.state.So}}*N({${Math.round((Math.log(this.state.So / this.state.K)+(this.state.r + Math.pow(this.state.v , 2)/2)*(this.state.t /12)) / (this.state.v *Math.sqrt(this.state.t/12))*10000)/10000}})-{${this.state.K}}*e^{-{${this.state.r}}*{${this.state.t /12}}}* N({${Math.round(((Math.log(this.state.So / this.state.K)+(this.state.r + Math.pow(this.state.v , 2)/2)*(this.state.t /12)) / (this.state.v *Math.sqrt(this.state.t/12))  -  (this.state.v *Math.sqrt(this.state.t/12)))*10000)/10000}})`}</InlineMath> </p>
						<br/>
						<br/>
						<p style={{borderStyle:"solid" , borderRadius:"30px"}}>Call={Math.round(blackScholes(this.state.So, this.state.K, this.state.t/12, this.state.v, this.state.r, this.state.optiontypeCP)*100)/100}</p>
						
						</div>
					 
					 :
					 
					 <div>
						 <p>In this case ,<InlineMath>{String.raw`\text So={${this.state.So}} , K={${this.state.K}} , r={${this.state.r}} , \sigma={${this.state.v}} , T={${this.state.t}}/12   `}</InlineMath> </p>
						<br/>
						<p>d1=<InlineMath>{"\\frac{\\ln(So / K) + (r+ \\sigma^2 /2) *T}{\\sigma\\sqrt {}T}"}</InlineMath>   <i class="fas fa-arrow-right"></i> Formula</p>
						<p>d1=<InlineMath>{String.raw`\frac{\text ln({${this.state.So}}/{${this.state.K}}) + ({${this.state.r}} +{${this.state.v}}^2 /2) *{${this.state.t}}}{\text{${this.state.v}}\sqrt {}{${this.state.t}}}`}</InlineMath></p>
						<br/> 
						<p style={{borderStyle:"groove" , borderRadius:"30px" , width:"fit-content" , marginLeft:"auto" , marginRight:"auto" , padding:"5px"}}>d1= <InlineMath>{String.raw`{${Math.round((Math.log(this.state.So / this.state.K)+(this.state.r + Math.pow(this.state.v , 2)/2)*(this.state.t /12)) / (this.state.v *Math.sqrt(this.state.t/12))*10000)/10000}}`}</InlineMath></p>
						<br/>
						<p>d2= d1- <InlineMath>{"\\sigma\\sqrt {}T"}</InlineMath>   <i class="fas fa-arrow-right"></i> Formula</p>
						<br/>
						<p style={{borderStyle:"groove" , borderRadius:"30px" , width:"fit-content" , marginLeft:"auto" , marginRight:"auto" , padding:"5px"}}>d2=<InlineMath>{String.raw`{${Math.round(((Math.log(this.state.So / this.state.K)+(this.state.r + Math.pow(this.state.v , 2)/2)*(this.state.t /12)) / (this.state.v *Math.sqrt(this.state.t/12))  -  (this.state.v *Math.sqrt(this.state.t/12)))*10000)/10000}}`}</InlineMath></p>
						<br/>
						<p>Put= <InlineMath>{"K e^{-rt} * N(-d2) - So * N(-d1) "}</InlineMath>   <i class="fas fa-arrow-right"></i> Formula</p>
						{/* pas fini  */}
						<br/>
						<p>Put= <InlineMath>{String.raw`\text ={${this.state.K}}*e^{-{${this.state.r}}*{${this.state.t /12}}}* N(-{${Math.round(((Math.log(this.state.So / this.state.K)+(this.state.r + Math.pow(this.state.v , 2)/2)*(this.state.t /12)) / (this.state.v *Math.sqrt(this.state.t/12))  -  (this.state.v *Math.sqrt(this.state.t/12)))*10000)/10000}})-{${this.state.So}}*N({${Math.round((Math.log(this.state.So / this.state.K)+(this.state.r + Math.pow(this.state.v , 2)/2)*(this.state.t /12)) / (this.state.v *Math.sqrt(this.state.t/12))*10000)/10000}})`}</InlineMath> </p>
						<br/>
						<p style={{borderStyle:"solid" , borderRadius:"30px"}}>Put={Math.round(blackScholes(this.state.So, this.state.K, this.state.t/12, this.state.v, this.state.r, this.state.optiontypeCP)*100)/100}</p>
						

						 </div>}
					</div>
		</div>
		
		
{/* fin 2ème colonne 		 */}
		</div>          
</div>
      )
   }
}

