import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<1000'],// 95% of requests should be below 1000ms
    }
}

export default function () {
    http.get('https://catfact.ninja/fact');
    sleep(1);
}