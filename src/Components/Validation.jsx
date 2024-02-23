import React, { Component } from 'react'


let initialState = {
    userName: "",
    userPassword: "",
    userEmail: "",
    nameError: "",
    emailError: "",
    passwordError: ""
}

export default class Validation extends Component {

    state = initialState;


    validateFormFields = () => {
        let nameError = "";
        let passwordError = "";
        let emailError = "";

        if (!this.state.userName) {
            nameError = "please enter username"
        }
        if (!this.state.userEmail.includes('@')) {
            emailError = "please enter valid email";
        }
        if (!this.state.userPassword) {
            passwordError = "please enter password"
        }
        this.setState({ nameError, emailError, passwordError })
        return !(nameError || emailError || passwordError)

    }

    handleChange = (e) => {
        const isChecked = e.target.type === 'checkbox';
        this.setState({ [e.target.name] : isChecked ? e.target.checked : e.target.value});
       
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = this.validateFormFields();
        if (isFormValid) {
            console.log(this.state)
            this.setState(initialState)
        }
    }

    render() {
        return (
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <div>
                        Name       :<input type="text"
                            name='userName'
                            onChange={this.handleChange}
                            value={this.state.userName}
                            placeholder='Enter your name' />
                    </div>
                    <div>{this.state.nameError}</div>
                    <div>
                        Password:<input type="password" name="userPassword"
                            placeholder='Enter your password'
                            onChange={this.handleChange}
                            value={this.state.userPassword} />
                    </div>
                    <div>{this.state.passwordError}</div>
                    <div>
                        Email      :<input type="email" name="userEmail" 
                        placeholder='Enter your email' onChange={this.handleChange}
                        value={this.state.userEmail}/>
                    </div>
                    <div>{this.state.emailError}</div>
                    <input type="submit" value="REGISTER" />
                </form>
            </div>
        )
    }
}
