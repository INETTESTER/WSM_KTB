import http from 'k6/http';
import { SharedArray } from 'k6/data'; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
const data = new SharedArray('ref1', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
    return JSON.parse(open('../file/refs.json')).ref1; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});
const data2 = new SharedArray('ref2', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
    return JSON.parse(open('../file/refs.json')).ref2; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});

export function payment_approval(scenario) {
    const ref1 = data[scenario.iterationInTest];
    const ref2 = data2[scenario.iterationInTest];
    // console.log("ref1: " + ref1);
    // console.log("ref2: " + ref2);
    const url = 'https://uat-apijobedu.one.th/api/v1/payment/3rd/ktb/approval';

    const payload = JSON.stringify({
        user: 'workspacemoph',
        password: 'moph0259',
        comCode: '62856',
        prodCode: '62856',
        command: 'Approval',
        bankCode: '6',
        bankRef: 'INET-BANK',
        dateTime: '20260618153000',
        effDate: '20260618',
        amount: '100.00',
        channel: '14',
        cusName: 'นายทดสอบ',
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