function testMiddleware({dispatch,getState}){ // first argument - store and the function expect return a function
    return(next)=>{ //internal function - give an argument 'next' . also expect return a function
        return(action)=>{ //the function give an argument action
            //logic
            console.log('prev-state',getState()); //previous state - state before action
            console.log('action',action);
            next(action);
            console.log('next state',getState());//latest state - state after action
            //we can write dispatch in middleware , use condition for dispatch in middleware other wise it run infinite loop
            console.log('-----------------');
        }
    }
}
export default testMiddleware