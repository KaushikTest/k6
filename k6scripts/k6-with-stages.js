import http from 'k6/http';

export const options ={
    stages:[{duration: '2s',target:2},{duration: '3',target:5},{duration: '5s',target:0}]
}

export default function () {
    http.get('https://catfact.ninja/fact');
}

/**
 * Use command k6 run k6-with-stages.js
 */