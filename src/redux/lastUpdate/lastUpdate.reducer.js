import { PlaylistAddOutlined } from '@material-ui/icons';
import CONSTANT_TYPES from '../reducer.types';

const INITIAL_STATE = {
    all: [],
    errorMessage: ''
}
const allReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.FETCH_ALL_SUCCESS:
            return {
                ...state,
                all: action.payload
            }
        case CONSTANT_TYPES.FETCH_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}
export default allReducer;