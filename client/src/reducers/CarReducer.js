const CarReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return state.concat([action.data]);
        case 'DELETE_CAR':
            return state.concat([action.data]);
        case 'EDIT_CAR':
            return state.concat([action.data]);
        default:
            return state;
    }
}
export default CarReducer;