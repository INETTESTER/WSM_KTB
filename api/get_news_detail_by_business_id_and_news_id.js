import http from 'k6/http';

export function get_news_detail_by_business_id_and_news_id() {
    const url = 'https://uat-apijobedu.one.th/api/v1/business/public/business_news_detail_user/345948914221762/445';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}