import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from 'reducers';
import { IUserAction, IUserState, UserType } from 'components';

type Dispatch = (event: IUserAction) => IUserState;

const User: React.FC = () => {
    const user: IUserState = useSelector((state: IStoreState) => state.userReducer);
    const { firstName, lastName } = user;
    const dispatch: Dispatch = useDispatch();

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
        </div>
    );
};

export default User;
