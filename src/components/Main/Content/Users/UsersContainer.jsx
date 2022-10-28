import React from 'react';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { follow, unfollow, setCurrentPage, toggleIsFetching, getUsers } from './../../../../redux/users-reducer';
import Preloader from './../../../common/Preloader/Preloader';
import Users from './Users';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                 />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersApiComponent)

export default connect(mapStateToProps, 
    {
        follow, unfollow, setCurrentPage, toggleIsFetching, getUsers
    }) (AuthRedirectComponent);