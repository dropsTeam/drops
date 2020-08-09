import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { connect } from 'react-redux';
import * as authActions from '../../Redux/Actions/AuthActions';

const CLIENT_ID = '1092942175302-0ibod3kvsqd9861k4q88epeaa2q2t587.apps.googleusercontent.com';


class GoogleBtn extends React.Component {

    constructor(props) {
        super(props);

        // Convert it into 
        this.state = {
            isAuthorised: false
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);

    }

    login(response) {

        // this.props.$login('yo');

        const params = new URLSearchParams();
        params.set('token', response.getAuthResponse().id_token);

        axios.post('/api/auth/log', params)
            .then(_ => {
                this.props.$setUser();
                // console.log(user.data);

            })
            .catch(err => {
                console.log(err);
                alert('Error Occured');
            })

    }


    logout(response) {
        console.log('called');
        this.props.$logout();
    }

    handleLoginFailure(response) {
        console.log(response);
    }

    handleLogoutFailure(response) {
        alert('Failed to log out')
    }

    componentDidMount() {
        // console.log(window.sessionStorage.getItem('oauth2_cs::http://localhost:3000::1092942175302-0ibod3kvsqd9861k4q88epeaa2q2t587.apps.googleusercontent.com'))
    }

    render() {
        return (
            (this.props.visible) ?
                <div>
                    {this.props.isAuthorised ?
                        <GoogleLogout
                            clientId={CLIENT_ID}
                            buttonText='Logout'
                            onLogoutSuccess={this.logout}
                            onFailure={this.handleLogoutFailure}
                        /> : <GoogleLogin
                            clientId={CLIENT_ID}
                            buttonText='Login'
                            onSuccess={this.login}
                            onFailure={this.handleLoginFailure}
                            cookiePolicy={'single_host_origin'}
                            responseType='code,token'
                        />
                    }
                </div>
                : null
        )
    }
}

const mapStateToPeops = (store) => {
    return {
        isAuthorised: store.isAuthorised
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        $setUser: (user) => dispatch(authActions.setUser()),
        $logout: () => dispatch(authActions.logout())
    }
}

export default connect(mapStateToPeops, mapDispachToProps)(GoogleBtn);
