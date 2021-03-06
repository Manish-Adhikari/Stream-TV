const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return {...state, isSignedIn: true, userId: action.payload.userId};
        case 'SIGN_OUT':
            return {...state, isSignedIn: false};
        default: return state;
    }
}