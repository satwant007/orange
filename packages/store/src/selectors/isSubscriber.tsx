import {subscriberState} from '../atoms/subscriber'
import {selector} from 'recoil';

export const isSubscribed = selector({
    key : 'isSubscribed',
    get : ({get})=>{
        const state = get(subscriberState);
        return state.isLoading;
    }
})