import http from 'k6/http';

export function get_topic_job_and_new() {
    const url = 'https://uat-apijobedu.one.th/api/v1/business/public/business-news-and-job-topic?search=&page=1&limit_per_page=10&sort_by=latest_publish&provider_type=providerID';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}