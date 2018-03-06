import  React from "react";


const User = (props) => {

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


