<script>
    import { orderBy,sumBy } from 'lodash'
    import { 
        QList, 
        QListHeader, 
        QItem, 
        QItemSide, 
        QItemMain, 
        QItemTile, 
        QItemSeparator, 
        QChip, 
        QBtn,
        QToggle,
        ActionSheet,
        Dialog
    } from 'quasar'
    export default{
        components:{
            QList,
            QListHeader,
            QItem,
            QItemSide,
            QItemMain,
            QItemTile,
            QItemSeparator,
            QChip,
            QBtn,
            QToggle,
            ActionSheet
        },
        data(){
            return {
                done:[]
            }
        },
        computed:{
            list(){
                return orderBy(this.$store.getters.getExpenses,['amount'],['desc'])
            },
            total(){
                return sumBy(this.list, o => o.amount)
            }
        },
        methods:{
            showActionSheet(gallery,expense){
                let self = this
                ActionSheet.create({
                    title: 'Ações',
                    gallery: gallery,
                    actions:[
                        { 
                            label:'Deletar', 
                            icon:'fa-trash',  
                            handler() { 
                                self.showDialog(expense) 
                            }
                        }
                    ]
                })
            },
            showDialog(expense){
                let self = this
                Dialog.create({
                    title:'Atenção',
                    message:'Vc deseja realmente excluir este registro ?',
                    buttons:[
                        { label:'Cancelar' },
                        {
                            label:'Ok',
                            handler(){
                                self.$store.commit('REMOVE_EXPENSE',expense)
                            }
                        }
                    ]
                })
            },
            checked(id){
                let self = this
                console.log(self.done.indexOf(id))
            }
        },
        created(){
            this.$store.dispatch('listData')
        }
    }
</script>
<template>
    <div>
        <q-list highlight v-if="list.length > 0">
            <q-list-header>Listagem dos Gastos</q-list-header>
            <q-item v-for="item in list" :key="item.amount" @click="showActionSheet(true,item)">
                <q-item-side>
                    <q-chip icon="fa-usd" color="positive"> {{ item.amount }}</q-chip>
                </q-item-side>
                <q-item-main>{{item.date + ' - ' +item.description }}</q-item-main>
                <q-item-side rigth>
                    <q-toggle v-model="done" :val="item.id" @click="checked(item.id)"/>
                </q-item-side>
            </q-item>
            <q-item-separator />
            <q-item>
                <q-item-side>Total dos gastos</q-item-side>
                <q-item-main></q-item-main>
                <q-item-side rigth>R$ {{ total }}</q-item-side>
            </q-item>
        </q-list>
    </div>
</template>
<style scoped></style>