import http from 'k6/http';

export function check_health_hello() {
    const url = 'https://uat-apijobedu.one.th/api/v1/health/check-health-hello';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}