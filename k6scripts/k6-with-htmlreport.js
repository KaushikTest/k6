import http from 'k6/http';
import {htmlReport} from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js'
import { sleep } from 'k6';

export default function () {
    http.get('https://catfact.ninja/fact');
    sleep(1);
}

export function handleSummary(data){
    return {
        "summary.html":htmlReport(data)
    }
}

/**
 * Use command k6 run k6-with-htmlreport.js
 */