import React from 'react';
import '../../styles/home.css';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import HomeList from './homeList';

export default function HomeTabs(props){

  const tabSelected = (index) => {
    switch(index){
				case 0 : return props.SelectedTabFn('All');
			  case 1 : return props.SelectedTabFn('Alert');
			  case 2 : return props.SelectedTabFn('Classes');
				case 3 : return props.SelectedTabFn('Exams');
        case 4 : return props.SelectedTabFn('General');
				default : return props.SelectedTabFn('All');
			}
  }

  const tabFunction = () => {
    let tabNames = ['All','Alert','Classes','Exams','General'];
    let items = [];
    for(let i=0;i<tabNames.length;i++){
      items.push(<Tab key={i}>{tabNames[i]}</Tab>)
    }
    return items;
  }

  const tabPanelFunction = () => {
    let tabNames = ['All','Alert','Classes','Exams','General'];
    let items = [];
    for(let i=0;i<tabNames.length;i++){
      items.push(<TabPanel key={i}><HomeList EventList={props.EventList}/></TabPanel>)
    }
    return items;
  }

  return(
    <Tabs onSelect={tabSelected}>
      <TabList>
        {tabFunction()}
      </TabList>
      {tabPanelFunction()}
    </Tabs>
  )
}
