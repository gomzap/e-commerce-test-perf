import { check, sleep } from "k6";
import { options } from "../k6.config.js";
import { baseURL } from "../support/config/config.js";
import { postRequest } from "../services/baseService.js";
import { createUserBody } from "../data/static/userBody.js";

export { options };

export default function () {
  let res;

  // criar usuario para realizar login
  const userBody = createUserBody();
  res = postRequest(`${baseURL}/usuarios`, JSON.stringify(userBody), {
    "Content-Type": "application/json",
  });
  // check(res, { "POST /usuarios status was 201": (r) => r.status === 201 });
  // sleep(1);

  // Login
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
  check(res, { "POST /login status was 200": (r) => r.status === 200 });
  const authToken = res.json().authorization;
  sleep(1);
}
