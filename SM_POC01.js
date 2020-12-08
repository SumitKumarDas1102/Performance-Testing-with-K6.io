//Import
import http from 'k6/http';
import { check, sleep } from 'k6';

//Init - setup the test config.
export let option = {
  stages: [
    {duration: "10s", target: 10},
    {duration: "20s", target: 20},
    {duration: "30s", target: 50},
    {duration: "40s", target: 50},
    {duration: "50s", target: 50},
    {duration: "60s", target: 20},
    {duration: "70s", target: 10},
    {duration: "80s", target: 0},
  ]
};

//Code for virtualUsers
export default function () {
  let response = http.get("https://www.google.com/");
  check(response,{
    "Status was 200": (r) => r.status == 200

  });
  sleep(1);
}