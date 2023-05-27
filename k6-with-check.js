import {check} from 'k6';
import http from 'k6/http';

export default function (){
    const response= http.get('https://catfact.ninja/fact');
    check(response,{
        'Status is 200': (r)=>r.status===200
    });
}

/**
 * Use command k6 run k6-with-check.js
 */