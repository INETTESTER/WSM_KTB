import http from 'k6/http';

export function check_health_db() {
    const url = 'https://uat-apijobedu.one.th/api/v1/health/check-health-db';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}