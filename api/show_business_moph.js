import http from 'k6/http';

export function show_business_moph() {
    const url = 'https://uat-apijobedu.one.th/api/v1/business/public/show-business-moph?page=1&limit_per_page=32&sort_by=latest_job&provider_type=providerID';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}