
(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        html, body {
            font-family: Arial;
            font-size: 16px;
            margin: 0;
            padding: 0;
            color: #000;
        }
        footer {
            height: 5rem;
            background: #5d55e9;
        }
        .cardCategoria{
            display: flex;
            flex-direction: row;
            background: #5ee;
            padding: .5rem;
            alignItems: center;
            justifyContent: center;
            height: auto;
            float: left;
            margin:.5rem;
        }
        .cardCategoria p, span, a {
            margin: 2px 4px 0 0 ;
            font-size: 10px;
        }

        .cardCategoria a {
            text-decoration: none;
            color: #000;
        }
        header {
            height: 8rem; 
            background: lightgreen;
        }

        header div {
            display: flex;
            flexDirection: row;
            justifyContent: 'space-between',
        }

        header img {
            min-height: 100px;
            max-height: 8rem; 
            min-width: 300px;
            Max-width: 400px;
        }

        header nav{
            border:none;
        }

        `;
    document.body.appendChild(style);
})();    