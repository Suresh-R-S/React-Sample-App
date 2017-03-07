import React from 'react';
import '../styles/common/organizationNames.css';

export default function OrganizationNames(props){
  const {input} = props;

  const optionsFunction = () => {
    let items = [];
    props.MasterData.map(i => {
      return items.push(<option key={i.get('id')} value={i.get('id')}>{i.get('name')}</option>);
    });
    return items
  }

  return(
    <select {...input} className="organization-names">
      {optionsFunction()}
    </select>
  )
}
