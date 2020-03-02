import { createStore } from 'redux';

const INITIAL_STATE = {
    name:[
    
    ], 
};

const courses = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return {
                ...state,
                name: [...state.name, action.name]
            }
        default:
            return state;
    }
}

const store = createStore(courses);

export default store;