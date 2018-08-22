import Vue from 'vue'
import Vuex from 'vuex'
import { lAddExpense, lRemoveExpense, lGetAllExpenses } from '../persistence/local'
import { getAllExpenses }  from '../persistence/cloud'
import { showErrAlert } from '../components/alert/Qalert.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        Expenses:{ list:[] },
        netConnection:false,
        dias:['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
        meses:[
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ]
    },
    mutations:{
        ADD_EXPENSE(state, obj){
            addExpense(obj)
            state.Expenses.list.unshift(obj)
        },
        SET_EXPENSES(state, obj){
            state.Expenses.list = obj
        },
        REMOVE_EXPENSE(state,obj){
            let idx = state.Expenses.list.indexOf(obj.id)
            state.Expenses.list.splice(idx,1)
            removeExpense(obj.id)
        },
        SET_DONE(state,obj){
            
        },
        LIST_DATA(state){
            if(!window.navigator.onLine){
                showErrAlert('O app está offline, os dados serão guardados localmente')
                lGetAllExpenses().then( list => {
                    state.Expenses.list = list
                }).catch( err =>{
                    console.log(err)
                })
            } else {
                 getAllExpenses().then( list => { 
                     state.Expenses.list = list
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    },
    getters:{
        getExpenses: state =>{
            return state.Expenses.list  
        },
        getDias: state => {
            return state.dias
        },
        getMeses: state => {
            return state.meses
        }
    },
    actions:{
        listData({ commit }){
            commit('LIST_DATA')
        }
    }
})