
import React,{Component} from "react";

import Vechical from "./Vechicaldetails"

class Wizardcheck extends Component {
   

    constructor(props){
        super(props)
     this.state={
        step:0,
        Done1:false,
        Done2:false,
        Done3:false,
       
       steps:[{key:1,component:< Vechical action={this.done}/>},
        {key:2,component:"second"},
        {key:3,component:"third"},
        {key:4,component:"final"}]     
    }
    this.handleNext=this.handleNext.bind(this)
    this.handleBack=this.handleBack.bind(this)

}
done = () =>
{
    this.setState({
        Done1:true

    });
}
    //go to next steptht
    handleNext = () =>  {
        
        if(this.state.step===this.state.steps.length-1)
        {
            return;
        }
      

       if(this.state.step===0){
        this.setState({
            Done1:true,
            step:this.state.step +1 
        });
        }

    
       
       if(this.state.step===1){
        this.setState({
            Done2:true,
            step:this.state.step +1 
        });
        }

    if(this.state.step===2){
        this.setState({
            Done3:true,
            step:this.state.step +1 
        });
         }

    if(this.state.step===3){
        this.setState({
            step:this.state.step +1 
        });
        }
      console.log(this.state.Done1);
      console.log(this.state.Done2);
      console.log(this.state.Done3);
  

   
        
    }

    handleBack()  {
        
        if(this.state.step===0)
        {
            return;
        }
      

       if(this.state.step===3){
        this.setState({
            Done3:false,
            step:this.state.step -1 
        });
    }

    
       
       if(this.state.step===2){
        this.setState({
            Done2:false,
            step:this.state.step -1 
        });
    }

    if(this.state.step===1){
        this.setState({
            Done1:false,
            step:this.state.step -1 
        });
    }

    if(this.state.step===3){
        this.setState({
            step:this.state.step -1 
        });
    }
      console.log(this.state.Done1);
      console.log(this.state.Done2);
      console.log(this.state.Done3);
  

   
        
    }
    render(){

  
 
        return(
            
            <div>
                <div className="wizard">
                    <div className="wizardbody">
                     <div className= "car" onClick={this.handleNext.bind(this)} >
                            <img src={require('../images/car.png').default} alt="imgae" className="carimage"></img>
                            <img src={require('../images/Group 171.svg').default} alt="imgae" className={this.state.Done1?"tickmark":"tickmarknone"}></img>
                        </div>
                               <div className="line">
                                </div> 


                        <div className={this.state.Done1?"car":"cardone"}onClick={this.handleNext.bind(this)}>
                            <img src={require('../images/contact.png').default} alt="imgae" className="carimage"></img>
                            <img src={require('../images/Group 171.svg').default} alt="imgae" className={this.state.Done2?"tickmark":"tickmarknone"}></img>
                        </div>

                        <div className="line">
                                </div> 
                        
                        <div className={this.state.Done2?"car":"cardone"}onClick={this.handleNext.bind(this)}>
                            <img src={require('../images/vechical.png').default} alt="imgae" className="carimage"></img>
                            <img src={require('../images/Group 171.svg').default} alt="imgae" className={this.state.Done3?"tickmark":"tickmarknone"}></img>
                        </div>
                        <div className="line">
                                </div> 
                            
                        <div className= {this.state.Done3?"car":"cardone"} onClick={this.handleNext.bind(this)}>
                            <img src={require('../images/Checklist_2_.svg').default} alt="imgae" className="carimage"></img>
                            <img src={require('../images/Group 171.svg').default} alt="imgae" className="tickmarknone"></img>
                        </div>
                    
                    </div>

                </div>
                <div className="contentbody">                   
                        {this.state.steps[this.state.step].component}
                  
                        <button onClick={this.handleNext}>next</button>
                        <button onClick={this.handleBack}>back</button>
                  
                </div>
            </div>
        )

     

    }
  }




export default Wizardcheck;
