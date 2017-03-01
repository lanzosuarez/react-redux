//course reducer
export default function courseReducer(state = [], action){
    switch (action.type){
        case 'CREATE_COURSE':
            var a = [...state,Object.assign({},action.course)];
            console.log(a);
            return [...state,
                Object.assign({},action.course)
            ];
        default:
            return state;
    }
}