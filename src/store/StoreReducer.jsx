
const initialStore ={
    user:{id:1,
          login:"dgaonam",
          name:"Daniel Alejandro",
          paterno:"Gaona",
          materno:"Mercado"
        }
}

const StoreReducer=(state,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export {initialStore};
export default StoreReducer;