import React , {Component} from 'react';
import {getUser} from '../actions/index';
import {connect} from 'react-redux';
class Todo extends Component {
  componentDidMount(){
    this.props.getUser();
  }
  render(){
    if(this.props.users){
      console.log(this.props.users)
    }
    return(<h1>TODO</h1>)
  }
}
const mapStateToProps = (state)=>{
  return{users:state}
}
export default connect(mapStateToProps,{getUser})(Todo);
