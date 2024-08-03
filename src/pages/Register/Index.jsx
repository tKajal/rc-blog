import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './Styles.css'
export class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            email: '',
            telephone: '',
            registration: false,
        }
    }

    //if lambda function is used no need to bind

    handleChange = (event) => {
        let field = event.target.name;
        this.setState({ [field]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.toogle();
    }

    toogle = () => {
        this.setState({ registration: !this.state.registration });
    }

    showFinalData = () => {
        return (
            <div>
                You Submitted following data
                <p>Name: {this.state.name}</p>
                <p>Password: {this.state.password}</p>
                <p>Email: {this.state.email}</p>
                <p>Telephone: {this.state.telephone}</p>

                <Button appearance="red" onClick={this.toogle}> Go back to edit </Button>
            </div>
        )
    }

    registerForm = () => {
        return (
            <div className='reg-wrap'>
                <h2>Register</h2>
                <form onSubmit={this.onSubmit}>

                    <div className="input-wrap gap-2">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" aria-describedby="username-help" defaultValue={this.state.name}
                            onChange={this.handleChange} />
                        {/* <small id="username-help">
                            Enter your username to reset your password.
                        </small> */}
                    </div>

                    <div className="input-wrap gap-2">
                        <label htmlFor="password">Password</label>
                        <InputText id="password" aria-describedby="password-help" defaultValue={this.state.password}
                            onChange={this.handleChange} />
                        {/* <small id="password-help">
                            Enter your password to reset your password.
                        </small> */}
                    </div>

                    <div className="input-wrap gap-2">
                        <label htmlFor="email">Email</label>
                        <InputText id="email" aria-describedby="email-help" defaultValue={this.state.email}
                            onChange={this.handleChange} />
                        {/* <small id="email-help">
                            Enter your email
                        </small> */}
                    </div>

                    <div className="input-wrap gap-2">
                        <label htmlFor="phone">Phone</label>
                        <InputText id="phone" aria-describedby="phone-help" defaultValue={this.state.telephone}
                            onChange={this.handleChange} />
                        {/* <small id="email-help">
                            Enter phone 
                        </small> */}
                    </div>
                    <div className="btn-wrap gap-2">
                        <Button label="Register" raised />
                    </div>
                </form>
            </div>
        );
    }

    render() {
        let content = (this.state.registration) ? this.showFinalData() : this.registerForm();
        return (
            <div>
                {content}
            </div>
        );
    }
}