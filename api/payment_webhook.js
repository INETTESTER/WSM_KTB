import http from 'k6/http';
import { SharedArray } from 'k6/data'; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
const data = new SharedArray('ref1', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
    return JSON.parse(open('../file/refs.json')).ref1; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});
const data2 = new SharedArray('ref2', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
    return JSON.parse(open('../file/refs.json')).ref2; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});

export function payment_webhook(scenario) {
    const ref1 = data[scenario.iterationInTest];
    const ref2 = data2[scenario.iterationInTest];
    const url = 'https://uat-apijobedu.one.th/api/v1/payment/3rd/ktb/webhook';

    const payload = JSON.stringify({
        user: 'workspacemoph',
        password: 'moph0259',
        comCode: '62856',
        prodCode: '62856',
        command: 'Payment',
        bankCode: '6',
        bankRef: 'LT996',
        tranxId: 'KTBLT277806300997',
        dateTime: '20260709162243',
        effDate: '20260709',
        amount: '100.00',
        channel: '14',
        cusName: '',
        ref1: '' + ref1,
        ref2: '' + ref2,
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