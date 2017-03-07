import React,{Component} from 'react';
import '../../styles/common/swipeCalendar.css';

export default class SwipeCalendar extends Component{

  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  calendarItems = () => {
    let listItems = [];
    this.props.Data.get('data').map(i => {
      return listItems.push(<li className="swipe-calendar-list-item" key={i.id}><div className="list-item-text">{i.date.getDate()}</div><div className="list-item-text">{this.monthNames[i.date.getMonth()]}</div></li>);
    });
    return listItems;
  }

  render(){
    return(
      <div className="swipe-calendar-container">
        <ul className="swipe-calendar-list">
          {this.calendarItems()}
        </ul>
      </div>
    )
  }
}
