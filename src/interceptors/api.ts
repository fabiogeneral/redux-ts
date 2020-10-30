import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { to } from 'await-to-js';

const request = async (options: AxiosRequestConfig) => {
    const { url, method, params, data } = options;
    let err: AxiosError | null;
    let response: AxiosResponse | undefined;
    [err, response] = await to(
        axios({
            baseURL: process.env.REACT_APP_API_BASE_URL,
            url,
            method,
            params,
            data,
        }),
    );
    if (err) return Promise.reject(err);
    return Promise.resolve(response);
};

const get = (url: string, params?: any) =>
    request({
        url,
        method: 'get',
        params,
    });

const post = (url: string, data: any) =>
    request({
        url,
        method: 'post',
        data,
    });

const put = (url: string, data: any) =>
    request({
        url,
        method: 'put',
        data,
    });

const remove = (url: string) =>
    request({
        url,
        method: 'delete',
    });

const api = { get, post, put, remove };

export interface IApi {
    all: Function;
    find: Function;
    create: Function;
    update: Function;
    remove: Function;
}

export default api;
