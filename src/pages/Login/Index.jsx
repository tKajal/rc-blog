import React, { Component, createRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
export class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            loginSuccessfull: false,
            message: '',
        }
        this.toast = createRef(null);
    }

    nextPage = () => {
        return (
            <div>
                Login SUccessfull
            </div>
        );
    }

    handleChange = (event) => {
        let field = event.target.name;
        this.setState({ [field]: event.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        if ((this.state.name === 'subash' || this.state.name === 'amrit') && this.state.password === 'ilovewings') {
            this.setState({ loginSuccessfull: true });
            this.setState({ message: <Toast ref={this.toast} /> });
        } else {
            this.setState({ message: <Toast ref={this.toast} /> })
        }

    }

    loginForm = () => {
        return (
            <div className='reg-wrap'>
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="input-wrap gap-2">
                        <label htmlFor="name">Name</label>
                        <InputText id="name" aria-describedby="name-help" onChange={this.handleChange} />
                        {/* <small id="email-help">
                            Enter your email
                        </small> */}
                    </div>
                    <div className="input-wrap gap-2">
                        <label htmlFor="password">Password</label>
                        <InputText id="password" aria-describedby="password-help" onChange={this.handleChange} />
                        {/* <small id="email-help">
                            Enter your email
                        </small> */}
                    </div>
                    <div className="btn-wrap gap-2">
                        <Button appearance="green"> Login </Button>
                    </div>
                </form>
            </div>
        );
    }

    render() {
        let content = (this.state.loginSuccessfull) ? this.nextPage() : this.loginForm();
        return (
            <div>
                {this.state.message}
                {content}
            </div>
        );
    }
}