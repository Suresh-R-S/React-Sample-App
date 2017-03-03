import React , {Component} from 'react';
import Header from '../../header';
import '../../../styles/eventDetails.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import favIconClicked from '../../../actions/eventDetailsAction';

function matchDispatchToProps(dispatch){
  return bindActionCreators({
		favIconClicked : favIconClicked
	},dispatch);
}

class EventDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      favFlag : this.props.location.state.eventDetails.get('fav')
    }
  }

  selectImage = () => {
    switch(this.props.location.state.eventDetails.get('type')){
				case 'A' : return "image-container image-alert";
			  case 'C' : return "image-container image-class";
			  case 'E' : return "image-container image-exam";
				case 'G' : return "image-container image-general";
				default : return "image-container image-general";
			}
  }

  favIconClickedHere = (id,value) => {
    this.props.favIconClicked(id,value);
    this.setState({
      favFlag : value
    })
  }

  favIconFunction = (id) => {
    if(this.state.favFlag){
      return <FontAwesome.FaHeart size={30} className="fav-icon" onClick={() => {this.favIconClickedHere(id,false)}}/>
    }
    else{
      return <FontAwesome.FaHeartO size={30} className="fav-icon" onClick={() => {this.favIconClickedHere(id,true)}}/>
    }
  }

  detailsIconFunction = (type) => {
    switch(type){
				case 'instructor' : return <FontAwesome.FaUser size={30}/>
			  case 'date' : return <FontAwesome.FaCalendar size={30}/>
			  case 'time' : return   <FontAwesome.FaClockO size={30}/>
				case 'location' : return <FontAwesome.FaMapMarker size={30}/>
        case 'details' : return <FontAwesome.FaFileTextO size={30}/>
				default : return <div/>
			}
  }

  detailsClassNameFunction = (type) => {
    switch(type){
        case 'subject' : return "details-text details-subject";
				case 'instructor' : return "details-text details-name";
			  case 'date' : return "details-text details-date";
			  case 'time' : return "details-text details-time";
				case 'location' : return "details-text details-location";
        case 'details' : return "details-text details-data";
				default : return '';
			}
  }

  eventDetailsShowFunction = (value,type) => {
    if(value){
      return(
        <div>
        {this.detailsIconFunction(type)}
        <div className={this.detailsClassNameFunction(type)}>
          {type === 'details' ?
            <textarea className="details-text-area" readOnly>
              {value}
            </textarea>
           : value}
        </div>
        { type === 'details' ? <div/> : <hr className="separator"/>}
        </div>
      )
    }
    else{
      return <div/>
    }
  }

  render(){
    return(
      <div>
        <Header/>
        <div className={this.selectImage()}>
          <div className="details-container">
            <div className="details-container-text">
              {this.eventDetailsShowFunction(this.props.location.state.eventDetails.get('subject'),'subject')}
              {this.eventDetailsShowFunction(this.props.location.state.eventDetails.get('instructor'),'instructor')}
              {this.eventDetailsShowFunction(this.props.location.state.eventDetails.get('date'),'date')}
              {this.eventDetailsShowFunction(this.props.location.state.eventDetails.get('time'),'time')}
              {this.eventDetailsShowFunction(this.props.location.state.eventDetails.get('location'),'location')}
              {this.eventDetailsShowFunction(this.props.location.state.eventDetails.get('details'),'details')}
            </div>
            <div className="fav-icon-button">
              {this.favIconFunction(this.props.location.state.eventDetails.get('id'))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null,matchDispatchToProps)(EventDetails);
