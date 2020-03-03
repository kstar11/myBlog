import { stringify } from 'qs';
import request from '../utils/request';

export function basicFetch(params) {
  return request(params.url);
}
