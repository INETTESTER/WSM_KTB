import http from 'k6/http';

export function get_topic_jobs_detail_by_topic_id() {
    const url = 'https://uat-apijobedu.one.th/api/v1/recruitment/public/government_detail/901';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}