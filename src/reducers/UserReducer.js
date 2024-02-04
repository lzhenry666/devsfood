const initialState = {
    name: 'Teste',
    token: '',
};

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        break;
        case 'SET_TOKEN':
            return {...state, token: action.payload.token};
        break;

        default:
            break;
    }

    return state;
}

export default UserReducer;