import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('https://catfact.ninja/fact');
    sleep(1);
}

export function handleSummary(data){
    return {
        "summary.json":JSON.stringify(data)
    }
}

/**
 * Use command k6 run k6-with-jsonreport.js
 */