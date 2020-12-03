import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUsers } from './../../action/auth';

function ListUsers({ users, getUsers }) {
    useEffect(() => {
        getUsers(100);
        // eslint-disable-next-line
    }, [])
    console.log(users);
    return (
        <div>

        </div>
    )
}

ListUsers.propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    users: state.auth.users
});
export default connect(mapStateToProps, { getUsers })(ListUsers)

