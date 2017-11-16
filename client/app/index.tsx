let Helmet = require('react-helmet');

const Index = (html)=> {
        const helmet = Helmet.rewind();
        return (
            <html lang="en-us">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                <link rel="shortcut icon" href="/favicon/favicon.ico"/>
                <link href={`/build/app.css`} rel="stylesheet"/>
            </head>
            <body>
            <div id="react-view" dangerouslySetInnerHTML={{ __html: html }}/>
            <script src={`/build/app.js`}/>
            </body>
            </html>
        );

};

export default Index;