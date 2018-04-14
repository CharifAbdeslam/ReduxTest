import React, {Component} from 'react';
import {getUser,delUser} from '../actions/index';
import {connect} from 'react-redux';
import {ListGroup, ListGroupItem, Button} from 'reactstrap'
class Todo extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  delete = (e)=>{
    this.props.delUser(e)
  }
  render() {
    if (!this.props.users) {
      return <div>Loading...</div>
    }
    return (<div>{
        this.props.users.map(user => {
          return (<ListGroup key={user.id}>
            <ListGroupItem>{user.id} {user.name}
              <Button onClick={(e)=> this.delete(user.id)} className="btn btn-danger pull-right">Remove</Button>
          </ListGroupItem>
          </ListGroup>)
        })
      }</div>)
  }
}
const mapStateToProps = state => ({
users: state.users.all
})
export default connect(mapStateToProps, {getUser,delUser})(Todo);
