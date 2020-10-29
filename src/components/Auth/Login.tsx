import React from 'react';
import { useDispatch } from 'react-redux';
import { IUserAction, IUserState, UserType } from 'components';
import { push } from 'connected-react-router';

type Dispatch = (event: IUserAction) => IUserState;

const Login: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const router = useDispatch();

    const fetchUser = () => {
        /* api call simulation */
        const userData = {
            id: 'bdecfb87-5948-4c50-8329-455ddfbc950e',
            firstName: 'Josh',
            lastName: 'Mosh',
            email: 'joshmosh@email.com',
        };
        dispatch({
            type: UserType.UPDATE_USER,
            payload: userData,
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <button
                onClick={() => {
                    fetchUser();
                    router(push('/user'));
                }}
            >
                Sign In
            </button>
        </div>
    );
};

export default Login;
