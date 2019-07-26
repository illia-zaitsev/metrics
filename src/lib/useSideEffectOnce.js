import { useContext, useEffect } from 'react';
import {AppContext} from "../App";

export default function useSideEffectOnce(type, params) {
    const effects = useContext(AppContext).effects;

    useEffect(() => {
        effects({type: type, params:params});
    }, [type, params, effects]);
}
