
import {atom} from 'recoil'

export const subscriberState = atom({
    key:'subscriberState',
    default:{
        isLoading: true,
        useremail:null
    }
})