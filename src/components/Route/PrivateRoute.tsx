import React from 'react';
import { Link, Redirect, Route, RouteProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from 'reducers';
import { IUserAction, IUserState, UserType } from 'components';

type Dispatch = (event: IUserAction) => IUserState;

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
    const user: IUserState = useSelector((state: IStoreState) => state.userReducer);
    const dispatch: Dispatch = useDispatch();

    const logoutUser = () => {
        const userData = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
        };
        dispatch({
            type: UserType.UPDATE_USER,
            payload: userData,
        });
    };

    if (!Component) return null;

    return (
        <>
            <div>
                <Link to="/user">User</Link> <Link to="/other">Other Page</Link>{' '}
                <Link to="/" onClick={() => logoutUser()}>
                    Logout
                </Link>
            </div>
            <Route {...rest} render={(props) => (!!user.id ? <Component {...props} /> : <Redirect to="/" />)} />
        </>
    );
};

export default PrivateRoute;
