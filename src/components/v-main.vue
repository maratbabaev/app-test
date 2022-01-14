<template>
  <div class='v-main'>
      <v-form/>
      <v-catalog/>
  </div>
</template>

<script>
import VCatalog from './v-catalog.vue'
import VForm from './v-form.vue'
export default {
    name: 'v-main',
    components: {VCatalog, VForm},
    props: {},
    data() {
        return {}
    }
}
</script>

<style>
    .v-main {
        width: 1376px;
        margin: 0 auto;
        padding: 32px 0 50px;
        display: flex;
        justify-content: space-between;
    }



@media(max-width: 600px) {
.v-main {
    flex-direction: column;
    flex-wrap: wrap;
    width: 95%;
}

.v-catalog {
    order: 0;
    width: 100%;
}


.v-form {
    order: 1;
    width: 100% !important;
    margin-top: 30px;
}

.v-catalog-item {
    width: 100%;
    margin: 16px auto 0;
}

}



</style>