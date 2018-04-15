import React, {Component} from 'react';
import {getUser,delUser,oneUser} from '../actions/index';
import {connect} from 'react-redux';
import {ListGroup, ListGroupItem, Button} from 'reactstrap'
class Todo extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  delete = (e)=>{
    this.props.delUser(e)
  }
  show =(e)=>{
    this.props.oneUser(e)
  }
  userDetail=()=>{
    if(!this.props.user.id){
    return(<div>Nothing to show yet</div>)
    }
    console.log(this.props.users)
    return(<div><p>{this.props.user.name}</p>
                <p>{this.props.user.username}</p>
                <p>{this.props.user.email}</p>
              </div>)
  }
  render() {
    if (!this.props.users) {
      return <div>Loading...</div>
    }

    return (<div>{
        this.props.users.map(user => {
          return (<ListGroup key={user.id}>
            <ListGroupItem>{user.id} {user.name}
              <Button onClick={(e)=> this.delete(user.id)} color="danger">Remove</Button>
              <Button onClick={(e)=> this.show(user.id)} color="success">Show</Button>
          </ListGroupItem>
          </ListGroup>)
        })}
        {this.userDetail()}

      </div>)
  }
}
const mapStateToProps = state => ({
users: state.users.all,
user:state.user.one
})
export default connect(mapStateToProps, {getUser,delUser,oneUser})(Todo);
