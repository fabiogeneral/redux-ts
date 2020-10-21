import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from 'reducers';
import { IUserAction, IUserState, userInitialState, UserType } from 'components';

type Dispatch = (event: IUserAction) => IUserState;

const App: React.FC = () => {
    const user: IUserState = useSelector((state: IStoreState) => state.userReducer);
    const { firstName } = user;
    const dispatch: Dispatch = useDispatch();

    return (
        <div>
            {firstName}
            <br />
            <button
                onClick={() =>
                    dispatch({
                        type: UserType.ADD_USER,
                        payload: { ...userInitialState, firstName: 'Mary' },
                    })
                }
            >
                Change Name
            </button>
        </div>
    );
};

export default App;
