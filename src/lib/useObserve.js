import { useContext, useEffect } from 'react';
import {AppContext} from "../App";
import {observeStore} from "../utils/utils";

export default function useObserve(selector, handler) {

    const store = useContext(AppContext).store;

    useEffect(() => {

        const unsubscribeArr = [];

        if (Array.isArray(selector)) {
            selector.forEach((s) => {
                const selector = s[0];
                const handler = s[1];
                unsubscribeArr.push(observeStore(store, selector, handler));
            })
        } else {
            unsubscribeArr.push(observeStore(store, selector, handler));
        }

        return function cleanup() {
            unsubscribeArr.forEach((unsubscribe) => { unsubscribe() })
        }
    });
}
