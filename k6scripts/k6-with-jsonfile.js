import http from 'k6/http';

const jsondata=open('./test.json');
const data=JSON.parse(jsondata);

export default function () {
    const index = __VU % data.number.length;
    const item=data['number'][index];
    console.log(`VU ${__VU} is processing item: ${item}`);
    http.get('https://catfact.ninja/'+`${item}`);
}

/**
 * Use command k6 run k6-with-jsonfile.js --vus 10 --iterations 10
 */