//import Raven from 'raven-js';

function init() {
    //removed the initilaization from Raven
}

function log(error) {
    //Raven.captureException(error);   
    console.error(error);
}

export default {
    init,
    log
}