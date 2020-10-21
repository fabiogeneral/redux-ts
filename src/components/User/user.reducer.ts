export const userInitialState = {
    firstName: '',
};

export interface IUserState {
    firstName: string;
}

export enum UserType {
    ADD_USER = 'ADD_USER',
}

export interface IUserAction {
    type: UserType;
    payload: IUserState;
}

export const userReducer = (currentState: IUserState = userInitialState, action: IUserAction) => {
    switch (action.type) {
        case UserType.ADD_USER:
            return {
                ...currentState,
                firstName: action.payload.firstName,
            };
        default:
            return currentState;
    }
};
