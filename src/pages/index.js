import Loadable from 'react-loadable';
import Loading from "@common/loading"

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

const Bought = Loadable({
    loader:()=>import("./bought"),
    loading:Loading
})

const Allbook = Loadable({
    loader:()=>import("./allbook"),
    loading:Loading
})

export {
    Mine,
    Bought,
    Allbook
}