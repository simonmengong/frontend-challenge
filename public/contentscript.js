console.log('Contentscript injected');

const sheet = document.createElement('style');
sheet.textContent = `
    .injected-button{
        display: inline-block;
        float: right;
        position: relative;
        margin-right: 5%;
        outline: none;
        cursor: pointer;
        font-weight: bold;
        border-radius: 3px;
        padding: 20px 20px;
        border-radius: 4px;
        color: #fff;
        background: rgb(11,34, 107);
        line-height: 1.15;
        font-size: 1rem;
        text-decoration: none;
        min-width: 64px;
        border: none;
        text-align: center;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .injected-button:hover{
        background: rgba(11,34, 107, .8);
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }
    .injected-tooltip{
        visibility: hidden;
        background-color: black;
        color: #fff;
        font-weight: 500;
        width: 120px;
        bottom: 100%;
        left: 50%;
        margin-left: -60px;
        font-size: 14px;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        z-index: 1;
        position: absolute;
    }
    .injected-button:hover .injected-tooltip{
        visibility: visible;
    }
    .injected-tooltip::after{
        content: " ";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }
    .injected-icon{
        background: url("./images/favicon-16x16.png");
        float: left;
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }
`;

document.head.appendChild(sheet);

const element = document.createElement('div');
const tooltip = document.createElement('span');
const span = document.createElement('span');

element.className = "injected-button";
span.className = "injected-icon";
tooltip.className = "injected-tooltip";
tooltip.innerHTML = 'Some more dummy information on climate change';
element.appendChild(span);
element.appendChild(tooltip);

const parentElement = document.querySelector(
'#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
 );
 const BudgetElement = document.querySelector(
'#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p:nth-child(3)',
    );
const injectedText = document.createTextNode(`Budget-to-Beat: ${BudgetElement.textContent}`);
element.appendChild(injectedText);
parentElement.appendChild(element);
