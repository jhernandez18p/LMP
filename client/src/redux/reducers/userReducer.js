import { 
    ADD_USER, 
    AUTH_USER, 
    DELETE_USER, 
    INVALIDATE_USER, 
    REQUEST_USER, 
    UPDATE_USER,
    SHOW_ERROR
} from '../actions/userActions';

export default function userReducer (state = {user: 'Guest'}, { type, payload }) {
    switch (type) {
        case ADD_USER:
            return payload.user;
        case AUTH_USER:
            return payload.user;
        case UPDATE_USER:
            return payload.user;
        case DELETE_USER:
            return payload.user;
        case SHOW_ERROR:
            return payload.user;
        case REQUEST_USER:
            return payload.user;
        case INVALIDATE_USER:
            return payload.user;
        default:
            return state;
    }
};