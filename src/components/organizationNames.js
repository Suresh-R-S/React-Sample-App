import React from 'react';
import '../styles/common/organizationNames.css';

export default function OrganizationNames(props){
  const {input} = props;

  const optionsFunction = () => {
    let items = [];
     for (let i = 0; i <= 3; i++) {
          items.push(<option key={i} value={i}>{i}</option>);
     }
     return items;
  }

  return(
    <select {...input} className="organization-names">
      {optionsFunction()}
    </select>
  )
}
