export const options = {
  // SMOKE TEST
  stages: [
    { duration: "2s", target: 1 }, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
    { duration: "5s", target: 5 }, // Duration can be shorter or just a few iterations
    { duration: "2s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["avg<800", "p(90)<2000"],
    http_req_failed: ["rate<0.01"],
  },
};

// // LOAD TEAD
//   stages: [
//     { duration: "1m", target: 20 }, //traffic ramp-up from 1 to 20 users over 1 minutes.
//     { duration: "3m", target: 20 }, //stay at 20 users for 3 minutes
//     { duration: "1m", target: 0 }, //ramp-down to 0 users
//   ],
//   thresholds: {
//     http_req_duration: ["avg<1000", "p(90)<2000"],
//     http_req_failed: ["rate<0.01"],
//   },
// };

//STRESS TEST
// stages: [
//   { duration: "3m", target: 40 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
//   { duration: "10m", target: 40 }, // stay at higher 200 users for 30 minutes
//   { duration: "2m", target: 0 }, // ramp-down to 0 users
// ],
// thresholds: {
//   http_req_duration: ["avg<1000", "p(90)<2000"],
//   http_req_failed: ["rate<0.01"],
// },
// };

// SOAK TEST
//   stages: [
//     { duration: "2m", target: 25 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
//     { duration: "15m", target: 25 }, // stay at 100 users for 8 hours!!!
//     { duration: "2m", target: 0 }, // ramp-down to 0 users
//   ],
//   thresholds: {
//     http_req_duration: ["avg<1000", "p(90)<2000"],
//     http_req_failed: ["rate<0.01"],
//   },
// };

//   //SPIKE TEST
//   stages: [
//     { duration: "1m", target: 20 }, // fast ramp-up to a high point
//     // No plateau
//     { duration: "1m", target: 0 }, // quick ramp-down to 0 users
//   ],
//   thresholds: {
//     http_req_duration: ["avg<1000", "p(90)<2000"],
//     http_req_failed: ["rate<0.01"],
//   },
// };
