//=============================== import API =================================
import { sleep } from 'k6';
import { Counter } from 'k6/metrics';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';
import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';
import { payment_approval } from '../api/payment_approval.js';
import { payment_webhook } from '../api/payment_webhook.js';
import { show_business_moph } from '../api/show_business_moph.js';
import { show_business_moph_byid } from '../api/show_business_moph_byid.js';
import { advanced_searchjobs } from '../api/advanced_searchjobs.js';
import { recruitment_by_business_id } from '../api/recruitment_by_business_id.js';
import { recruitment_detail_by_recruit_id } from '../api/recruitment_detail_by_recruit_id.js';
import { get_Theme_by_site_name } from '../api/get_theme_by_site_name.js';
import { insert_view_log } from '../api/insert_view_logs.js';
import { check_health_hello } from '../api/check_health_hello.js';
import { check_health_db } from '../api/check_health_db.js';
import { get_news_by_business_id } from '../api/get_news_by_business_id.js';
import { get_topic_job_and_new } from '../api/get_topic_job_and_news.js';
import { get_news_detail_by_business_id_and_news_id } from '../api/get_news_detail_by_business_id_and_news_id.js';
import { get_topic_jobs_detail_by_topic_id } from '../api/get_topic_job_detail_by_topic_id.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //////// KTB
  //response = payment_approval(scenario)
  //response = payment_webhook(scenario)

  //////// business
  //response = show_business_moph()
  //response = show_business_moph_byid()

  //////// recruitment
  //response = advanced_searchjobs()
  //response = recruitment_by_business_id()
  //response = recruitment_detail_by_recruit_id()

  //////// topic job and news
  //response = get_topic_job_and_new()
  //response = get_news_by_business_id()
  //response = get_news_detail_by_business_id_and_news_id()
  //response = get_topic_jobs_detail_by_topic_id()

  //////// theme and vies logs
  //response = get_Theme_by_site_name()
  //response = insert_view_log()

  //////// health
  //response = check_health_hello()
  //response = check_health_db()




  if (response.timings.duration > 500) {
    slowRequests.add(1);
  }
  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
export const slowRequests = new Counter('slow_requests');
if (scenariox == 1) {
  options = {
    thresholds: {
      slow_requests: ['count<=30'],
    },
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: false,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    thresholds: {
      slow_requests: ['count<=30'],
    },
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };