<template>
  <div class='v-form'>
      <h2 class='form__title'>Добавление товара</h2>
      <form class='form-product'>
          <div class='input-block'>
              <label for='productName'>Наименование товара<span>*</span></label>
              <input 
                type='text' 
                name='name' 
                id='productName' 
                ref="productName"
                required placeholder="Введите наименование товара" 
                v-model="productName"
                @blur="onBlur('productName', productName)"
              >
              <span class='error__text'>Поле является обязательным</span>
          </div>
          <div class='input-block'>
              <label for='productText'>Описание товара</label>
              <textarea 
                id='productText' 
                placeholder="Введите описание товара" 
                v-model="productText"
              ></textarea>
          </div>
          <div class='input-block'>
              <label for='productImg'>Ссылка на изображение товара<span>*</span></label>
              <input 
                type='text' 
                name='image' 
                id='productImg' 
                required placeholder="Введите ссылку" 
                v-model="productImg"
                ref="productImg"
                @blur="onBlur('productImg', productImg)"
              >
              <span class='error__text'>Поле является обязательным</span>
          </div>
          <div class='input-block'>
              <label for='productPrice'>Цена товара<span>*</span></label>
              <input 
                type='number' 
                name='price' 
                id='productPrice' 
                required placeholder="Введите цену" 
                v-model="productPrice"
                ref="productPrice"
                @blur="onBlur('productPrice', productPrice)"
              >
              <span class='error__text'>Поле является обязательным</span>
          </div>
          <button class='btn-form' @click='addProduct'>Добавить товар</button>
      </form>
  </div>
</template>

<script>

import {mapActions} from 'vuex'


export default {
    name: 'v-main',
    components: {},
    props: {},
    data() {
        return {
            productName: '',
            productText: '',
            productImg: '',
            productPrice: ''
        }
    },
    methods: {
        ...mapActions([
            'ADD_PRODUCT'
        ]),
        onBlur(id, value) {
            let input = document.querySelector('#'+id)
            if (value.trim() === '') {
                input.closest('.input-block').classList.add('input-block__error')
            } else {
                input.closest('.input-block').classList.remove('input-block__error')
            }
            let btn = document.querySelector('.btn-form')
            if (this.$refs.productName.value.trim() != '' && this.$refs.productImg.value.trim() != '' && this.$refs.productPrice.value.trim() != '') {
                btn.classList.add('btn-form__active')
            } else {
                btn.classList.remove('btn-form__active')
            }
        },
        addProduct(e){
            e.preventDefault()
            let product = {}
            product.name = this.productName
            product.text = this.productText
            product.img = this.productImg
            product.price = this.productPrice

            this.ADD_PRODUCT(product)

            setTimeout(function(){     
                let products = document.querySelectorAll('.v-catalog-item')     
                products[products.length-1].classList.add('v-catalog-item__add') 
            },1)
            setTimeout(function(){
                let products = document.querySelectorAll('.v-catalog-item')
                products.forEach(elem => {
                    elem.classList.remove('v-catalog-item__add')
                })   
            },1000)
        }
    }
}
</script>

<style scoped>
    .v-form {
        width: 332px;
    }


.form__title {
    font-weight: 600;
font-size: 28px;
line-height: 35px;
color: #3F3F3F;
}

.form-product {
    margin-top: 16px;
    background: #FFFEFB;
box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
border-radius: 4px;
padding: 24px;
}

.form-product label {
    font-size: 10px;
line-height: 130%;
letter-spacing: -0.02em;
color: #49485E;
}

.form-product label span {
    color: #FF8484;
    font-size: 14px;
}

.input-block {
    margin-top: 16px;
    position: relative;
}

.input-block input, .input-block textarea {
    display: block;
    background: #FFFEFB;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
border-radius: 4px;
border: 0;
width: 100%;
margin-top: 4px;
}


.input-block input {
    height: 36px;
    padding: 0 0 0 16px;
    transition: 1s;
    border: 1px solid #FFFEFB;
}

.input-block textarea {
    height: 108px;
    padding: 10px 0 0 16px;
}

::-webkit-input-placeholder {
   font-size: 12px;
    line-height: 1;
    color: #B4B4B4;
     font-family: 'Source Sans Pro', sans-serif;
}
::-moz-placeholder  {
   font-size: 12px;
    line-height: 1;
    color: #B4B4B4;
     font-family: 'Source Sans Pro', sans-serif;
}
:-moz-placeholder    {
   font-size: 12px;
    line-height: 1;
    color: #B4B4B4;
     font-family: 'Source Sans Pro', sans-serif;
}
:-ms-input-placeholder  {
   font-size: 12px;
   line-height: 1;
    color: #B4B4B4;
     font-family: 'Source Sans Pro', sans-serif;
}



.btn-form {
    background: #EEEEEE;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
font-size: 12px;
line-height: 1;
text-align: center;
letter-spacing: -0.02em;
color: #B4B4B4;
border: 0;
height: 36px;
width: 100%;
margin-top: 24px;
cursor: pointer;
transition: 0.3s;
pointer-events:none;
}

.btn-form__active {
    background: #7BAE73;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
color: #FFFFFF;
pointer-events: auto;
}

.btn-form:hover {
    background: #767474;
    color: #fff;
}



.error__text {
    font-size: 8px;
line-height: 1;
letter-spacing: -0.02em;
color: #FF8484;
position: absolute;
bottom:-12px;
left: 0;
opacity: 0;
pointer-events: none;
transition: 1s;
}


.input-block__error input {
border: 1px solid #FF8484;
}

.input-block__error .error__text {
    opacity: 1;
}
</style>