import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [
  { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class TableHeader extends Component {
  render() {
    let co = this.props.cols;
    let child = co.map(function(element) {
      return <th>{element}</th>;
    });
    return <thead><tr>{child}</tr></thead>
  }
}
export class SenatorRow extends Component {
  render() {
  let sen = this.props.senator;
  let first = <td>{sen.name}</td>;
  let secondContent = sen.party.charAt(0) + " - "+  sen.state;
  let second = <td>{secondContent}</td>
  let href = sen.phone;
  let href2 = "tel:" + sen.phone;
  let third = <td><a href = {href2}>{href}</a></td>;
  let url = "https://twitter.com/user_name".replace("user_name",sen.twitter);
  let name = "@" + sen.twitter;
  let fourth = <td><a href = {url}>{name}</a></td>;
  return <tr>{first} {second}{third}{fourth}</tr>;
  }
}

export class SenatorTable extends Component {
  render() {
    let head = ['Name', 'State', 'Phone', 'Twitter'];
    let th = <TableHeader cols = {head}/>
    let senators = this.props.senators;
    let row = senators.map(function(element){
      return <SenatorRow senator = {element}/>;
    }) 
    return <table className="table-bordered">{th}{row}</table>
  }
}

export class App extends Component {
  render() {
    let sena = this.props.senators;
    let tb = <SenatorTable senators = {sena}/>;
    return <div className="container"><h1>US Senators 2018</h1>
      {tb}
    </div>
  }
}



