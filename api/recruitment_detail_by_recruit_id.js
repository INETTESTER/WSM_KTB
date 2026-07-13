import http from 'k6/http';

export function recruitment_detail_by_recruit_id() {
    const url = 'https://uat-apijobedu.one.th/api/v1/recruitment/public/recruit-detail/7889';

    const response = http.get(url);

    //console.log(response.body);

    return response;
}