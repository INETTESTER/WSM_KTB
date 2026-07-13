import http from 'k6/http';

export function advanced_searchjobs() {
    const url = 'https://uat-apijobedu.one.th/api/v1/recruitment/public/advanced-searchjobs?provider_type=providerID';

    const payload = JSON.stringify({
        keyword: [],
        business_sector: [],
        job_type: [],
        location: [],
        min_salary: null,
        max_salary: null,
        degree: [],
        employee_type: [],
        job_position: [],
        business_type: [],
        page: 1,
        limit_per_page: 8,
        urgent_required: null,
        sort_by: 'latest_posted',
        account_id: '',
    });

    const headers = {
        'Content-Type': 'application/json',
    };

    const response = http.post(url, payload, {
        headers,
    });

    //console.log(response.body);

    return response;
}