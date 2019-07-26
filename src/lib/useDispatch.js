import { useContext } from 'react';
import {AppContext} from "../App";

export default function useDispatch(action_type) {
    const store = useContext(AppContext).store;

    return (payload) => {
        store.dispatch({type:action_type, payload:payload});
    };
}
