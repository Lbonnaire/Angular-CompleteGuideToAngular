import { Action,createAction , props} from "@ngrx/store";

export const init =createAction(
    '[Counter] Init'
)
export const set = createAction(
    '[Counter] Set',
    props<{value:number}>()
)

export const INCREMENT = '[Counter] Increment'
export const DECREMENT = '[Counter] Decrement'

export const increment = createAction(
    INCREMENT,
props<{value:number}>()
);
export const decrement = createAction(
    DECREMENT,
    props<{value:number}>()
);





// export class IncrementAction implements Action{
//     readonly type= INCREMENT;
//     constructor(public value:number){
        
//     }
// }
// export type CounterActions=IncrementAction;