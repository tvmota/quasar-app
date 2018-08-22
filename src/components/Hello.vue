<script>
  import { 
    dom, 
    event, 
    openURL, 
    QLayout, 
    QToolbar, 
    QToolbarTitle, 
    QBtn, 
    QIcon, 
    QList, 
    QListHeader, 
    QItem, 
    QItemSide, 
    QItemMain } 
  from 'quasar'
  import CcForm from './expenses/form.vue'
  import CcList from './expenses/list.vue'
  import { showErrAlert } from './alert/Qalert.js'
export default {
  name: 'index',
  components: { 
    QLayout, 
    QToolbar, 
    QToolbarTitle, 
    QBtn, 
    QIcon, 
    QList, 
    QListHeader, 
    QItem, 
    QItemSide, 
    QItemMain, 
    CcForm,
    CcList
  },
  data () {
    return {}
  },
  mounted(){
    /*if(window.navigator.onLine){
      showErrAlert('O app está offline, os dados serão guardados localmente')
    }*/
  }
}
</script>
<template>
  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="fa-bars" />
      </q-btn>

      <q-toolbar-title>
        Despesas
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="fa-book" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="fa-commenting" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="fa-comments" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item>
          <q-item-side icon="fa-twitter-square" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
      
      <div class="container">
        <section class="secao">
          <cc-form></cc-form>
        </section>
        <section class="secao">
          <cc-list></cc-list>
        </section>
      </div>
  </q-layout>
</template>
<style lang="stylus" scoped>
  .container
    padding:20px
  .secao
    padding-bottom:20px
</style>
