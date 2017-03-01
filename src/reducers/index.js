import {combineReducers} from 'redux';
import courseRedducer from './CourseReducers';

//root rootReducer
const rootReducer = combineReducers({
    courseRedducer //courseRedducer:courseRedducer
});

export default rootReducer;