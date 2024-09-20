import { check, sleep } from "k6";
import { options } from "../k6-config.js";
import { baseURL } from "../support/config/config.js";
import { postRequest, deleteRequest } from "../services/baseService.js";
import { createUserBody } from "../data/static/userBody.js";
import { createProductBody } from "../data/static/productBody.js";
import { createCartBody } from "../data/static/cartBody.js";
//import { BaseChecks } from "../support/base/baseChecks.js";

//const BaseChecks = new BaseChecks();

export { options };
//export { ENDPOINTS } from "../support/base/constants.js";

export default function () {
  let res;

  // BaseChecks.checkStatusCode(res, 201);

  // cadastrar usuário
  const userBody = createUserBody();
  res = postRequest(`${baseURL}/usuarios`, JSON.stringify(userBody), {
    "Content-Type": "application/json",
  });

  check(res, { "POST /usuarios status is 201": (r) => r.status === 201 });
  check(res, {
    "POST /usuarios response time is acceptable": (r) =>
      r.timings.duration < 3000,
  });
  sleep(1);

  // realizar login
  res = postRequest(
    `${baseURL}/login`,
    JSON.stringify({
      email: userBody.email,
      password: userBody.password,
    }),
    {
      "Content-Type": "application/json",
    }
  );
  check(res, { "POST /login status is 200": (r) => r.status === 200 });
  check(res, {
    "POST /login response time is acceptable": (r) => r.timings.duration < 3000,
  });
  const authToken = res.json().authorization;
  sleep(1);

  // Criar produto pro carrinho
  const productBody = createProductBody();
  res = postRequest(`${baseURL}/produtos`, JSON.stringify(productBody), {
    "Content-Type": "application/json",
    Authorization: authToken,
  });
  check(res, { "POST /produtos status is 201": (r) => r.status === 201 });
  check(res, {
    "POST /produtos response time is acceptable": (r) =>
      r.timings.duration < 3000,
  });
  const productId = res.json()._id;
  sleep(1);

  // criar carrinho
  const cartBody = createCartBody(productId);
  res = postRequest(`${baseURL}/carrinhos`, JSON.stringify(cartBody), {
    "Content-Type": "application/json",
    Authorization: authToken,
  });
  check(res, { "POST /carrinhos status is 201": (r) => r.status === 201 });
  check(res, {
    "POST /carrinhos response time is acceptable": (r) =>
      r.timings.duration < 3000,
  });
  sleep(1);

  // concluir compra/ deletar carrinho
  res = deleteRequest(`${baseURL}/carrinhos/concluir-compra`, {
    Authorization: authToken,
  });
  check(res, {
    "DELETE /carrinhos/concluir-compra status is 200": (r) => r.status === 200,
  });
  check(res, {
    "DELETE /carrinhos/concluir-compra response time is acceptable": (r) =>
      r.timings.duration < 3000,
  });
}
