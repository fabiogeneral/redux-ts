import { api, IApi } from 'interceptors';
import { IUserState } from 'components';

const all = () => api.get('/users');
const find = (id: string) => api.get(`/user/${id}`);
const create = (user: IUserState) => api.post('/user', user);
const update = (user: IUserState) => api.put(`/user/${user.id}`, user);
const remove = (id: string) => api.remove(`/user/${id}`);
const login = (emailAddress: string, password: string) => api.post('/login', { emailAddress, password });

interface IUserApi extends IApi {
    login: Function;
}

const UserApi: IUserApi = {
    all,
    find,
    create,
    update,
    remove,
    login,
};

export default UserApi;
