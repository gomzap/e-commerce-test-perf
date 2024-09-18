import http from "k6/http";

export function postRequest(url, body, headers) {
  return http.post(url, body, { headers: headers });
}

export function getRequest(url, headers) {
  return http.get(url, { headers: headers });
}

export function deleteRequest(url, headers) {
  return http.del(url, null, { headers: headers });
}
