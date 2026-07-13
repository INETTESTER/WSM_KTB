import http from 'k6/http';

export function recruitment_by_business_id() {
    const url = 'https://uat-apijobedu.one.th/api/v1/recruitment/public/recruit-detail-moph?business_id=1310663338492227&search=&sort_by=job_date_desc&job_type=job_general&page=1&limit_per_page=8';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}