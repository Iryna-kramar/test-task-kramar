import React from 'react'
import LoginForm from './LoginForm'

const loginStyles = {
    width: '400px',
    margin: '0 auto',
    padding: '30px',
    boxShadow: '0 4px 8px rgb(0,0,0,5%)',
    borderRadius: '5px',
    backgroundColor: '#fff'
}

const Login = () => {
    return (
        <div style={loginStyles}>
            <h4 className="mb-4">Login</h4>
            <LoginForm />
        </div>
    )
}

export default Login