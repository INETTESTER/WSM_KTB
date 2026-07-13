import http from 'k6/http';

export function get_Theme_by_site_name() {
    const url = 'https://uat-apijobedu.one.th/api/v1/themes/public?site_name=MOPH';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}