import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Форма авторизации</h1>
                <form action="" method="post">
                    <input name="email" placeholder="Email" type="email"/>
                    <br/>
                    <input name="password" placeholder="Пароль" type="password"/>
                    <br/>
                    <input type="submit" value="Вход"/>
                </form>
            </div>
        );
    }
}