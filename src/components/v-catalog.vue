<template>
  <div class='v-catalog'>
      <div class='select' v-bind:class='{selectActive: selectActiveIn}'>
          <div class='select__top' @click='selectActive'>
              <p>{{selectTop}}</p>
              <img src='../assets/down.svg'>
          </div>
          <div class='select__list'>
              <v-select-item 
                v-for="(select, i) in SELECTS"
                :key='i'
                :select='select'
                @selectClick = selectClick(i)
              />  
          </div>
      </div>
      <div class='v-catalog-wrap'>
        <v-catalog-item
            v-for="(product, i) in PRODUCTS"
            :key='i'
            :product = product
            @removeProduct = removeProduct(i)
        />
      </div>
  </div>
</template>

<script>
import VCatalogItem from './v-catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'
import VSelectItem from './v-select-item.vue'

export default {
name: 'v-catalog',
    components: {VCatalogItem, VSelectItem},
    props: {},
    data() {
        return {
            selectActiveIn: false,
            selectTop: 'По умолчанию'
        }
    },
    methods: {
        ...mapActions([
            'REMOVE_PRODUCT',
            'SORT'
        ]),
        removeProduct(i) {
            let products = document.querySelectorAll('.v-catalog-item')
            products[i].classList.add('v-catalog-item__remove')
            setTimeout(function(){
                products[i].classList.remove('v-catalog-item__remove')
            },1000)
            this.REMOVE_PRODUCT(i)
        },
        selectActive() {
            this.selectActiveIn = !this.selectActiveIn
        },
        selectClick(i) {
            this.selectActiveIn = false
            this.selectTop = this.SELECTS[i]
            this.SORT(i)
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'SELECTS'
        ])
    }
}
</script>

<style scope>
    .v-catalog {
        width: calc(1028px + 16px);
    }


.v-catalog-wrap {
    display: flex;
    flex-wrap: wrap;
}

.select {
    width: 143px;
height: 36px;
position: relative;
margin-left: auto;
}

.select__top {
    background: #FFFEFB;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
border-radius: 4px;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 14px;
cursor: pointer;
}

.select__top p {
    font-size: 12px;
line-height:1;
color: #B4B4B4;
}

.select__list {
    position: absolute;
    top:100%;
    left: 0;
    background: #FFFEFB;
    width:100%;
    z-index: 9;
    border: 1px solid #B4B4B4;
    display: none;
}

.selectActive .select__list {
    display: block;
}

.selectActive .select__top {
    border-radius: 4px 4px 0 0;
}

.selectActive .select__top img {
    transform: rotate(180deg);
}





</style>