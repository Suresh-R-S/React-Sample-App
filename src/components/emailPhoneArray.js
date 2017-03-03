import React,{Component} from 'react';
import '../styles/settings.css';
import * as FontAwesome from 'react-icons/lib/fa';

export default class EmailPhoneArray extends Component {
  constructor(props){
    super(props);
    this.state = {
      textInput : ''
    }
  }

  textInputChanged = (e) => {
    e.preventDefault();
    this.setState({
      textInput : e.target.value
    });
  }

  addClicked = () => {
    if(this.state.textInput){
      this.props.AddToArray(this.state.textInput,this.props.Type);
    }
  }

  removeClicked = (index) => {
    this.props.PopFromArray(index,this.props.Type);
  }

  render(){
    return(
      <fieldset className="settings-checkbox-group email-phone">
        <legend className="settings-header">{this.props.Type==='EMAIL' ? 'Email' : 'Phone'}</legend>
        {this.props.Type==='EMAIL' ? <div className="array-item">{this.props.PrimaryEmail}</div> : <div/>}
        <div>
          {this.props.Data.map((item,index) => {
            return (<div className="array-item">
            <span>{item}</span>
            {!this.props.EditFlag ? <div/> : <FontAwesome.FaClose color="red" size={25} className="add-remove-button" onClick={() => this.removeClicked(index)}/>}
            </div>)
          })}
        </div>
        {!this.props.EditFlag ? <div/> : <div className="array-item">
          <input className="input-field" type="text" placeholder={this.props.Type==='EMAIL' ? "Enter Your Email Id" : "Enter Your Phone No."} onChange={this.textInputChanged}/>
          <FontAwesome.FaPlusSquare color="#1179c0" size={25} className="add-remove-button" onClick={this.addClicked}/>
        </div>}
      </fieldset>
    )
  }
}
