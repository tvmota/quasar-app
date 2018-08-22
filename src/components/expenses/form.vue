<script>
    import { QInput, QBtn, QDatetime, uid } from 'quasar'
    import { clone } from 'lodash'
    
    export default{
        components:{ QInput, QBtn, QDatetime },
        data(){
            return {
                expense:{ 
                    id:'',
                    amount:0, 
                    description:'', 
                    date:new Date(),
                    done:false
                }
            }
        },
        computed:{
            dias(){
                return this.$store.getters.getDias
            },
            meses(){
                return this.$store.getters.getMeses
            }
        },
        methods:{
            submit(){
                let cloned = clone(this.expense)
                cloned.date = moment(cloned.date).format('DD/MM/YYYY')
                cloned.id = uid()
                this.$store.commit('ADD_EXPENSE',cloned)
                this.reset()
            },
            reset(){
                this.expense = { amount:0, description:'', date:'', done:false }
                this.$refs.amount.focus()
            }
        }
    }
</script>
<template>
    <form @submit.prevent="submit">
        <q-input type="number" ref="amount" v-model="expense.amount" prefix="R$" :after="[{ icon:'fa-money ' }]"/>
        <q-input type="text" v-model="expense.description" placeholder="Descrição" :before="[{ icon:'fa-info-circle' }]"/>
        <q-datetime 
            type="date" 
            v-model="expense.date" 
            placeholder="Data"
            ok-label="OK"
            clear-label="Limpar"
            cancel-label="Cancelar"
            format="DD/MM/YYYY"
            :day-names="dias"
            :month-names="meses"
            :before="[{ icon:'fa-calendar' }]"/>
        <br>
        <q-btn icon="fa-floppy-o" :push="true" color="primary">Salvar</q-btn>
    </form>
</template>
<style scoped lang="stylus">
    .salvar
        float:right
</style>
