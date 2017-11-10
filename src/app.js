import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class App extends Component{
  addList = e => {
     console.log(e.target.value);
     this.props.store.addPost(e.target.value);
  }
  render(){
    const {store} = this.props;
    return (<div>
      {
        store.list.map((item, inx)=>(<span key={inx}>{item}</span>))
      }
      <input onChange={this.addList} placeholder="添加list" />
    </div>)
  }
}