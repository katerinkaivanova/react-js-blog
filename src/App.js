import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';
import Login from "./Login";

class App extends React.Component {
    render() {
        const  menuItems  = [
            { title: 'Главная', href: '/'},
            { title: 'О нас', href: '/about'},
            { title: 'Услуги', href: '/service'},
            { title: 'Контакты', href: '/contacts'},
        ];

        return (
            <div>
                <h1>Первое приложение на React</h1>
                <Menu items={menuItems}/>
                <Login />
            </div>
        );
    }
}

/*
const App = props => {
    return (
        <div>
            <h1> Первое приложение на React</h1>
            <p>Функциональный компонент</p>
        </div>
    );
};
 */

ReactDOM.render(<App/>, document.querySelector('#root'));
