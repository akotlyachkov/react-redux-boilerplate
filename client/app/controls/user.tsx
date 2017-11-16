import * as React from "react";

export interface IUser{
    name;
    error;
    handleLogin;
}

const User = (props:IUser) => {

        const {name, error} = props;
        let template;

        if (name) {
            template = <p>Привет, {name}!</p>
        } else {

            template = <button className='btn' onClick={props.handleLogin}>Войти</button>
        }

        return (
            <div className='ib user'>
                {template}
                {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
            </div>
        )
};

export default User;


