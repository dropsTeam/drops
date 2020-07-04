import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';


const CLIENT_ID = '1092942175302-0ibod3kvsqd9861k4q88epeaa2q2t587.apps.googleusercontent.com';

export default class GoogleBtn extends React.Component {

    constructor(props) {
        super(props);

        // Convert it into 
        this.state = {
            isLogined: false,
            accessToken: ''
        };

        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);

    }

    login(response) {

        const params = new URLSearchParams();
        params.set('token', response.getAuthResponse().id_token);

        axios.post('http://localhost:8080/auth/log', params)
            .then(res => {
                console.log(res);
            })

        if (response.wc.access_token) {
            this.setState(state => ({
                isLogined: true,
                accessToken: response.getAuthResponse().id_token
            }));
        }


    }

    logout(response) {
        this.setState(state => ({
            isLogined: false,
            accessToken: ''
        }));
    }

    handleLoginFailure(response) {
        alert('Failed to log in')
    }

    handleLogoutFailure(response) {
        alert('Failed to log out')
    }

    componentDidMount() {
        console.log(sessionStorage.getItem('myUserEntity'))
    }

    render() {
        return (
            <div>
                {this.state.isLogined ?
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
                {this.state.accessToken ? <h5>Your Access Token: <br /><br /> {this.state.accessToken}</h5> : null}

            </div>
        )
    }
}
