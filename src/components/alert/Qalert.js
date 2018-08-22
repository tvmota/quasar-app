import { Alert } from 'quasar'

export function showInfoAlert(msg){
    Alert.create({
        color:'info',
        html:msg,
        position:'top'
    })
}

export function showErrAlert(msg){
    Alert.create({
        color:'negative',
        html:msg,
        position:'top'
    })
}