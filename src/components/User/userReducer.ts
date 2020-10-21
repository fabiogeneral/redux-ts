export default (currentState = { userFirstName: '' }, action: any) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...currentState,
                userFirstName: action.payload,
            };
        default:
            return currentState;
    }
};
