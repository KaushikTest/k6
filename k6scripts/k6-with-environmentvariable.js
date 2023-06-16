import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    console.log(__ENV);
    http.get('https://catfact.ninja/fact');
    sleep(1);
}

/**
 * Use command k6 run k6-basic-script.js
 */