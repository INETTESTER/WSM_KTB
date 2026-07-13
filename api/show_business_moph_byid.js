import http from 'k6/http';

export function show_business_moph_byid() {
    const url = 'https://uat-apijobedu.one.th/api/v1/business/public/show-business-moph/1310663338492227';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}