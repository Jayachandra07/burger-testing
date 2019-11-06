import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'
 import burgerLogo from '../assets/burger-logo.png';


class Burger1 extends React.Component {
    constructor(props){
        super(props)
        this.state={Salad:0, Bacon:0,Cheese:0, Meat:0}
    }
    
    manipulate=(e)=>{
        console.log(e.target.textContent);
        let clicked=e.target.textContent;
        switch(clicked)
        {
            case "More":
          
                let a=e.target.parentElement.parentElement.children[0].textContent;
            
                    switch(a)
                    {
                        case "Salad":
                        this.setState({Salad:this.state.Salad+1})
                        break;
                        case "Bacon":
                        this.setState({ Bacon:this.state.Bacon+1})
                       break;
                        case "Cheese":
                        this.setState({ Cheese:this.state.Cheese+1})
                       break;
                        case "Meat":
                        this.setState({ Meat:this.state.Meat+1})
                       break;
                    }
                
                    console.log(this.state);
                break;
            case "Less":
            let b=e.target.parentElement.parentElement.children[0].textContent;

            switch(b)
            {
                case "Salad":
                if(this.state.Salad===0)
                { this.setState({Salad:this.state.Salad})}
                        else{
                this.setState({Salad:this.state.Salad-1})
                        }
                break;
                case "Bacon":
                if(this.state.Bacon===0)
                { this.setState({ Bacon:this.state.Bacon})}
                        else{
                this.setState({Bacon:this.state.Bacon-1, })
                        }
               break;
                case "Cheese":
                if(this.state.Cheese===0)
                { this.setState({ Cheese:this.state.Cheese})}
                        else{
                this.setState({ Cheese:this.state.Cheese-1})
                        }
               break;
               
                case "Meat":
                if(this.state.Meat===0)
                { this.setState({ Meat:this.state.Meat})}
                        else{
                this.setState({ Meat:this.state.Meat-1})
                        }
               break;
            }
        
            console.log(this.state);
        break;
        }
    }
    
  render() {
    const Burger =(props)=>{
        let k=0;
        let array=[];
       
            for (let i in props.arr){
                let len=props.arr[i];
                for(let j=0;j<len;j++)
                {
                    array[k]=<div className={i}></div>
                    k++;
                }
            }
    
                return(
                 <div className="box">
                    <div className="BreadTop" > 
                   <div className="Seeds1">  </div>
                   <div className="Seeds2">  </div>
                   </div>
                 {array}
                 <div className="BreadBottom">  </div> 
                 </div>
                )
            }

    return (

     <div>
                <div className="header">
                <ul>
                   {/* <li><button classname="checkout">Checkout</button></li>
                    <li><button classname="checkout">Burger Buider</button></li> */}
                    <li>Checkout</li>
                    <li>Burger Builder</li>
                   
                    </ul>
                </div>
             <Burger arr={this.state}/>
                {/* <p>{this.props.name}</p> */}
                   
                <div className="footer">
                
                  <table className="table">
                  <tbody>
                  <tr><td></td><td><p> Current Price:7.40</p></td></tr>
            <tr><td>Salad</td><td><button  className="less" onClick={this.manipulate}>Less</button></td><td><button onClick={this.manipulate}>More</button></td></tr>
            <tr><td>Bacon</td><td><button  className="less" onClick={this.manipulate}>Less</button></td><td><button onClick={this.manipulate}>More</button></td></tr>
            <tr><td>Cheese</td><td><button className="less" onClick={this.manipulate}>Less</button></td><td><button onClick={this.manipulate}>More</button></td></tr>
            <tr><td>Meat</td><td><button className="less" onClick={this.manipulate}>Less</button></td><td><button onClick={this.manipulate}>More</button></td></tr>
            <tr><td></td><td><button>Order Now</button></td><td></td></tr>
            </tbody>
           </table>
                </div>
                <div className="apple">dsfgdfg</div>
                </div>




    )
  }
}

ReactDOM.render(<Burger1/>, document.getElementById('root'));
