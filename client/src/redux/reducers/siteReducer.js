import { 
    GET_SITE,
    UPDATE_SITE
} from '../actions/siteAction'

const siteReducer = (state = [], {type, payload}) => {
    switch (type) {
        case GET_SITE:
            return payload;
        case UPDATE_SITE:
            return payload;
        default:
            return state;
    }
};

export default siteReducer;