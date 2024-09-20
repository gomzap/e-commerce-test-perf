import { check, sleep } from "k6";
import { options } from "../k6-config.js";
import { baseURL } from "../support/config/config.js";
import { postRequest, deleteRequest } from "../services/baseService.js";
import { createUserBody } from "../data/static/userBody.js";
import { createProductBody } from "../data/static/productBody.js";
import { createCartBody } from "../data/static/cartBody.js";

export { options };

export default function () {
  let res;

  // cadastrar usuário
  const userBody = createUserBody();
  res = postRequest(`${baseURL}/usuarios`, JSON.stringify(userBody), {
    "Content-Type": "application/json",
  });
  // check(res, { "POST /usuarios status is 201": (r) => r.status === 201 });
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
  // check(res, { "POST /login status is 200": (r) => r.status === 200 });
  const authToken = res.json().authorization;
  sleep(1);

  // Criar produto no carrinho
  const productBody = createProductBody();
  res = postRequest(`${baseURL}/produtos`, JSON.stringify(productBody), {
    "Content-Type": "application/json",
    Authorization: authToken,
  });
  // check(res, { "POST /produtos status is 201": (r) => r.status === 201 });
  const productId = res.json()._id;
  sleep(1);

  // criar carrinho
  const cartBody = createCartBody(productId);
  res = postRequest(`${baseURL}/carrinhos`, JSON.stringify(cartBody), {
    "Content-Type": "application/json",
    Authorization: authToken,
  });
  // check(res, { "POST /carrinhos status is 201": (r) => r.status === 201 });
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
