import http from 'k6/http';

export function insert_view_log() {
    const url = 'https://uat-apijobedu.one.th/api/v1/log_manager/view_logs';

    const payload = JSON.stringify({
        from_refcode: null,
        page_name: 'landing_page',
        path: '/',
        query_params: {},
        ref_category: null,
        ref_category_value: null,
        ref_account_id: null,
        ref_username: null,
        ref_site: 'MOPH',
        token: null,
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