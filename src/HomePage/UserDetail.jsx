import React from 'react'


const UserDetails = (props) => {
    const { user } = props;

    return (
        <React.Fragment>
            <tr>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.phone}</td>
                <td>{props.doj}</td>
                <td>{props.address}</td>
            </tr>
        </React.Fragment>
    )
}

export default UserDetails
