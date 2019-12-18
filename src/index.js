import * as helpermodule from "./helpermodule";
import _ from 'lodash';
import * as style from './style.css';
function component() {
    console.log("Watching Your Files" );
    console.log(helpermodule.sayhello);
    const element = document.createElement('div');
    element.className=style.blue;
    element.innerHTML = _.join(['Hello', 'steve',' mwangi']);
    //alert(style.blue);
    return element;
}

document.body.appendChild(component());
if (module.hot) {
       module.hot.accept('./helpermodule.js', function() {
             console.log('Accepting the updated printMe module2!');
       });
}