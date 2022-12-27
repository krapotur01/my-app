import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { follow, unfollow, setCurrentPage, toggleIsFetching, getUsers } from './../../../../redux/users-reducer';
import { getUsersSelect, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './../../../../redux/users-selections';
import Preloader from './../../../common/Preloader/Preloader';
import Users from './Users';

class UsersContainer extends React.Component {
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
        users: getUsersSelect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFetching, getUsers}),
    withAuthRedirect) (UsersContainer)