import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserDetails from './UserDetail';


import { userActions } from '../actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

   

    render() {
        const { user, users } = this.props;
        
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Mobile</th>
                                <th>Doj</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {users.items.map(input => 
                                  <UserDetails key={input.id} {...input } user={user}/>
                            )}
                            
                        </tbody>
                    </table>
                }

                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };