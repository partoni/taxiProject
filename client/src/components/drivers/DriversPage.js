import { useSelector } from "react-redux"
import { ListDrivers } from "./listDrivers/ListDrivers"
import SearchForms from "./searchForm/SearchForms"


export const DriversPage = ()=>{
const store = useSelector(state=>state.drivers)
    return(
        <>
       <SearchForms/>
       {/* <ListDrivers store={store}/> */}
        </>
    )
}
