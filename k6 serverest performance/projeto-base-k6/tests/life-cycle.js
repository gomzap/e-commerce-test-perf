import { sleep } from "k6";
import { Counter } from "k6/metrics";

//inicializa variaveis, define options (VU, duration, thresholds)
let counter = 1;

//executa apenas 1 vez antes da função principal
export function SETUP() {
  console.log("SETUP $(Counter)");
}

// pontos de entrada dos VU's
export default function () {
  console.log(`FUNÇÃO PRINCIPAL - ${counter} VU=${__VU} ITER=${__ITER}`);
  counter = counter + 1;
  sleep(1);
}

export function teardown() {
  // teardown code executa apenas 1 vez após a execução da função principal
  console.log("TEARDOWN - ${counter}");
}

//importar fuções setup e teardown nos testes!?

//TEST.JS example FILE ->

// import http from "k6/http";
// import { check, sleep } from "k6";
// import { SharedArray } from "k6/data";

// export const options = {
//   vus: 1, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
//   duration: "1s", // This can be shorter or just a few iterations
// };

// const data = new SharedArray("Users", function () {
//   const jsonData = JSON.parse(open("../data/static/user.json"));
//   return jsonData.users;
// });

// const payload = {
//   nome: "Fulano da Silva",
//   email: "fulano@qa.com",
//   password: "teste",
//   administrador: "true",
// };

// export function setup() {
//   const res = http.post("http://localhost:3000/usuarios", payload);
//   check(res, {
//     "status should be 201": (r) => r.status === 201,
//   });
//   console.log("CADASTRANDO USUARIO");
//   return { responseData: res.json() };
// }

// export default () => {
//   let userIndex = __ITER % data.length;
//   let user = data[userIndex];
//   console.log(user);
//   const urlRes = http.post("http://localhost:3000/login", user);
//   check(urlRes, {
//     "is status 200": (r) => r.status === 200,
//   });
//   console.log("REALIZANDO LOGIN");
//   sleep(1);
// };

// export function teardown(responseData) {
//   const userId = responseData.responseData._id;
//   const res = http.del(`http://localhost:3000/usuarios/${userId}`);
//   check(res, {
//     "status should be 201": (r) => r.status === 201,
//   });
//   console.log(`teardown deletando usuário com ID ${userId}`);
// }
