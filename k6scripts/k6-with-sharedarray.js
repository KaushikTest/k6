import http from 'k6/http';
import { SharedArray } from 'k6/data';

const data = SharedArray('Share Array', function () {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return array;
});

export default function () {
    const index = __VU % data.length;
    const item=data[index];
    console.log(`VU ${__VU} is processing item: ${item}`);
    http.get('https://catfact.ninja/'+`${item}`);
}

/**
 * Use command k6 run k6-with-sharedarray.js --vus 10 --iterations 10
 */