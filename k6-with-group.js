import http from 'k6/http';
import { group } from 'k6';

export default function () {

    group('CatFact', function () {
        http.get('https://catfact.ninja/fact');
    });

    group('CatBreeds', function () {
        http.get('https://catfact.ninja/breeds');
    });

    group('CatFacts', function () {
        http.get('https://catfact.ninja/facts');
    });

}