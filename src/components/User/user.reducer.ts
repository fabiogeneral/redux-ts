export const userInitialState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
};

export interface IUserState {
    id: string | null;
    firstName: string;
    lastName: string;
    email: string;
}

export enum UserType {
    UPDATE_USER = 'UPDATE_USER',
}

export interface IUserAction {
    type: UserType;
    payload: IUserState;
}

export const userReducer = (currentState: IUserState = userInitialState, action: IUserAction) => {
    switch (action.type) {
        case UserType.UPDATE_USER:
            return {
                ...currentState,
                ...action.payload,
            };
        default:
            return currentState;
    }
};
