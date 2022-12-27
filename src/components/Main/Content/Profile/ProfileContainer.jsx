import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { getUserProfile, updateProfile, getStatus, updateStatus } from './../../../../redux/profile-reducer';
import Profile from './Profile.jsx';
// import { withRouter } from "react-router-dom"; // не работает т.к. находимс в классовой компоненте, т.к. Хуки нельзя совмещать с классами, они созданы, чтобы заменить классы.
import { useParams } from 'react-router-dom'; // Используем т.к. нельзя использовать хуки с классами. Обертываем Хук в функцию, чтобы мы могли использовать его в классовой компоненте.

export function withRouter(Children) { //замена HOC
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        };

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} 
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus}       
                updateProfile={this.props.updateProfile} />        
    }
}

const mapStateToProps = (state) => (
    {
        profile: state.profile.profile,
        status: state.profile.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
)

export default compose(
                connect(mapStateToProps, {getUserProfile, updateProfile, getStatus, updateStatus}),
                withRouter, withAuthRedirect) (ProfileConteiner)