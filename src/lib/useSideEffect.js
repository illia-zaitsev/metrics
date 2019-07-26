import { useContext } from 'react';
import {AppContext} from "../App";

export default function useSideEffect(type) {
    const effects = useContext(AppContext).effects;

    return (params) => {
        effects({type: type, params:params});
    };
}
