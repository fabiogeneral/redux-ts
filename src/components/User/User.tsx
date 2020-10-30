import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from 'reducers';
import { IUserAction, IUserState, UserApi, UserType } from 'components';
import { AxiosError, AxiosResponse } from 'axios';
import { to } from 'await-to-js';

type Dispatch = (event: IUserAction) => IUserState;

const User: React.FC = () => {
    const user: IUserState = useSelector((state: IStoreState) => state.userReducer);
    const { firstName, lastName } = user;
    const dispatch: Dispatch = useDispatch();

    const onSave = async () => {
        let err: AxiosError | null;
        let response: AxiosResponse | undefined;
        [err, response] = await to(UserApi.create(user));
        if (err) return console.log(err);
        // do success action
        console.log(response);
    };

    return (
        <div>
            <h1>User Page</h1>
            {firstName} {lastName}
            <br />
            <br />
            <button
                onClick={() =>
                    dispatch({
                        type: UserType.UPDATE_USER,
                        payload: { ...user, firstName: 'John' },
                    })
                }
            >
                Change First Name to John
            </button>
            <br />
            <br />
            <button onClick={() => onSave()}>Save</button>
        </div>
    );
};

export default User;
