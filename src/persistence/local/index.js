import storage from 'localforage'

export function lAddExpense(expense){
  storage.setItem(expense.id, expense)
}

export async function lGetAllExpenses(){
    let list = []
    let keys = await storage.keys()
    
    await Promise.all( keys.map(async (key)=>{
        list.push(await storage.getItem(key))
    }))
    return list
}

export function lRemoveExpense(key){
    storage.removeItem(key)
}