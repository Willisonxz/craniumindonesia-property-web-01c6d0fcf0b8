import { config } from "./config";
import axios from 'axios';

const instanceAxios = axios.create({ timeout: 20000 }); // set timeout

class BaseAPI {
    _urlWebApi = '';
    constructor() {
        // this._urlWebApi = process.env.REACT_APP_BASE_URL_DASHBOARD;
        this._urlWebApi = config.baseURL;
    }
    get urlWebApi() {
        return this._urlWebApi;
    }
}

class API extends BaseAPI {
    constructor() {
        super();
        console.log(this)
    }
    async Get(params) {
        try {
            let headerCustom =
                params.useToken ===
                    true ?
                    // { headers: { Authorization: `Bearer ${store.getState().user.token}` } }
                    null
                    : null;
            const response = await instanceAxios.get(`${this.urlWebApi}/${params.pathAPI}`, headerCustom);
            return response

        } catch (error) {
            throw error.message;
        }
    }
    async Post() {
        // let headerCustom =
        //     params.useToken ===
        //         true ?
        //         // { headers: { Authorization: `Bearer ${store.getState().user.token}` } }
        //         null
        //         : null;
        // try {
        //     const response = await instanceAxios.get(`${this.componentAPI?.urlDashboard}/${params.pathAPI}`, headerCustom);
        //     return response

        // } catch (error) {
        //     throw error.message;
        // }
    }
    async Update() {
        // let headerCustom =
        //     params.useToken ===
        //         true ?
        //         // { headers: { Authorization: `Bearer ${store.getState().user.token}` } }
        //         null
        //         : null;
        // try {
        //     const response = await instanceAxios.get(`${this.componentAPI?.urlDashboard}/${params.pathAPI}`, headerCustom);
        //     return response

        // } catch (error) {
        //     throw error.message;
        // }
    }
    async Delete() {
        // let headerCustom =
        //     params.useToken ===
        //         true ?
        //         // { headers: { Authorization: `Bearer ${store.getState().user.token}` } }
        //         null
        //         : null;
        // try {
        //     const response = await instanceAxios.get(`${this.componentAPI?.urlDashboard}/${params.pathAPI}`, headerCustom);
        //     return response

        // } catch (error) {
        //     throw error.message;
        // }
    }
}

export const ApiComponent = new API();
