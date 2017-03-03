import React from 'react';
import HomeListItem from './homeListItem';
import '../../styles/home.css';
import {browserHistory} from 'react-router';

export default function HomeList(props){
  const borderColorFunction = (type) => {
    switch(type){
				case 'A' : return 'home-list-item alert';
			  case 'C' : return 'home-list-item classes';
			  case 'E' : return 'home-list-item exams';
				case 'G' : return 'home-list-item general';
				default : return 'home-list-item others';
			}
  }

  const listItemClicked = (details) => {
    browserHistory.push({
      pathname : 'eventDetails',
      state : {eventDetails : details}
    });
  }

  const homeListFunction = () => {
    let items = [];
    props.EventList.get('data').map(i => {
      return items.push(<li key={i.get('id')} className={borderColorFunction(i.get('type'))} onClick={() => listItemClicked(i)}><HomeListItem Data={i}/></li>)
    })

    // let data = [
    //   {type:'A',subject:'Active Shooter in the campus'},
    //   {type:'E',subject:'CS Model Exam 2017',date:'1/3/2017 10:00AM',location:'Exam Hall,Block A'},
    //   {type:'C',subject:'ReactJS workshop',date:'1/3/2017 10:00AM',location:'Seminar Hall'},
    //   {type:'G',subject:'Annual Day Celebrations',date:'1/3/2017 10:00AM',location:'Auditorium'}
    // ];
    // let items = [];
    // for(let i=0;i<data.length;i++){
    //   items.push(<li key={i} className={borderColorFunction(data[i].type)} onClick={() => listItemClicked(data[i].type)}><HomeListItem Data={data[i]}/></li>)
    // }

    return items;
  }

  return(
    <ul className="home-list-main">
      {homeListFunction()}
    </ul>
  )
}
