import http from 'k6/http';

export function get_news_by_business_id() {
    const url = 'https://uat-apijobedu.one.th/api/v1/business/public/business_news?business_id=341440614225692&search=&sort=DESC&page=1&limit_per_page=10';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}