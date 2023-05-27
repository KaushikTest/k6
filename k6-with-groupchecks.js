import http from 'k6/http';
import { check, group } from 'k6';

export default function () {

    group('CatFact', function () {
        const catfactresponse = http.get('https://catfact.ninja/fact');
        check(catfactresponse,{
            'Check Response is 200':(r)=>r.status===200,
            'Check Response time is below 500ms':(r)=>r.timings.duration<500
        });
    });

    group('CatBreeds', function () {
        const catbreedsresponse =http.get('https://catfact.ninja/breeds');
        check(catbreedsresponse,{
            'Check Response is 200':(r)=>r.status===200,
            'Check Response time is below 500ms':(r)=>r.timings.duration<500
        });
    });

    group('CatFacts', function () {
        const catfactsresponse =http.get('https://catfact.ninja/facts');
        check(catfactsresponse,{
            'Check Response is 200':(r)=>r.status===200,
            'Check Response time is below 500ms':(r)=>r.timings.duration<500
        });
    });
}