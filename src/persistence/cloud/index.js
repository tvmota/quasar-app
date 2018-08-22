import Firebase from 'firebase'
    
const config = {
    apiKey: "AIzaSyCfLKVirO2XtRaKQ8NterGmEI0iOTN_nr4",
    authDomain: "qapp-51182.firebaseapp.com",
    databaseURL: "https://qapp-51182.firebaseio.com",
    projectId: "qapp-51182",
    storageBucket: "qapp-51182.appspot.com",
    messagingSenderId: "243448128754"
}
    
let app = Firebase.initializeApp(config)
let db = app.database()
let expensesRef = db.ref('Expenses')
    
export async function getAllExpenses(){
    let list = []
    let firelist = await expensesRef.once('value')
    
    firelist.val().map( l => list.push(l))
    return list
}