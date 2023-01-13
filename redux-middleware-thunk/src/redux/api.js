// import axios from "axios"
// import{setData} from './store'

// function getDataInfo(dispatch){
//     dispatch(setLoading(true));
//     axios.get('https://fakestoreapi.com/products')
//     .then((response)=>{
//         dispatch(setData(response.data))
//         dispatch(setLoading(false));
//     })
//     .catch(()=>{
//         dispatch(setLoading(false));
//         dispatch(setError('An error is occured'))
//     })
// }export default getDataInfo;