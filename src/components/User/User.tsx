import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from 'reducers';
import { IUserAction, IUserState, UserType } from 'components';

type Dispatch = (event: IUserAction) => IUserState;

const User: React.FC = () => {
    const user: IUserState = useSelector((state: IStoreState) => state.userReducer);
    const { firstName, lastName } = user;
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        // Fetch User
        /* api call */
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
    }, [dispatch]);

    return (
        <div>
            {firstName} {lastName}
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
