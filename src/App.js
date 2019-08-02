import React from 'react';
import ReactDOM from 'react-dom';

import "./app/styles/style.css";

import Blog from "./app/components/Blog";
import WelcomeModal from "./app/components/WelcomeModal";


class App extends React.Component {
    render() {
        const  blogPosts  = [
            {
                title: 'Title 1',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'Aspernatur consectetur corporis error fugiat inventore labore nesciunt nostrum reprehenderit, ullam. ' +
                    'Accusantium assumenda aut facere, ipsam molestias neque omnis quam tempore. Maiores.',
                postDate: '01.08.2019'
            },
            {
                title: 'Title 2',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'Aspernatur consectetur corporis error fugiat inventore labore nesciunt nostrum reprehenderit, ullam. ' +
                    'Accusantium assumenda aut facere, ipsam molestias neque omnis quam tempore. Maiores.',
                postDate: '02.08.2019'
            },
            {
                title: 'Title 3',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'Aspernatur consectetur corporis error fugiat inventore labore nesciunt nostrum reprehenderit, ullam. ' +
                    'Accusantium assumenda aut facere, ipsam molestias neque omnis quam tempore. Maiores.',
                postDate: '03.08.2019'
            },
            {
                title: 'Title 4',
                postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'Aspernatur consectetur corporis error fugiat inventore labore nesciunt nostrum reprehenderit, ullam. ' +
                    'Accusantium assumenda aut facere, ipsam molestias neque omnis quam tempore. Maiores.',
                postDate: '04.08.2019'
            },
        ];

        return (
            <div>
                <Blog posts={blogPosts}/>
                <WelcomeModal />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
