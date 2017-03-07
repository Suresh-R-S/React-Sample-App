import React from 'react';
import '../../styles/home.css';
import * as FontAwesome from 'react-icons/lib/fa';

export default function HomeListItem(props){

  const eventType = (type) => {
    switch(type){
				case 'A' : return 'ALT';
			  case 'C' : return 'CLS';
			  case 'E' : return 'EXM';
				case 'G' : return 'GEN';
				default : return 'OTH';
			}
  }

  return(
      <div className="home-list-data-container">
        <div className="event-type">
          <span className="event-type-text">{eventType(props.Data.get('type'))}</span>
        </div>
        <div className="event-details">
          <div><span className="event-details-subject">{props.Data.get('subject')}</span></div>
          <div><span className="event-details-date">{props.Data.get('date')}</span></div>
          <div><span className="event-details-location">{props.Data.get('location')}</span></div>
        </div>
        <div className="event-arrow">
          <FontAwesome.FaAngleRight/>
        </div>
      </div>
  )
}
