<template>
  <div class='v-catalog-item'>
      <img class='basket' src='../assets/basket.svg' @click='removeProduct'>
      <div class='item__img'>
          <img :src="product.img">
      </div>
      <div class='item__content'>
          <h3 class='item__title'>{{product.name}}</h3>
          <p class='item__text'>{{product.text}}</p>
          <h4 class='item__price'><span>{{product.price}}</span> руб.</h4>
      </div>
  </div>
</template>

<script>
export default {
name: 'v-catalog-item',
    components: {},
    props: {
        product: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        removeProduct() {
            this.$emit('removeProduct')
        }
    }
}
</script>

<style scope>
    .v-catalog-item {
        transition: 1s;
        cursor: pointer;
        text-align: left;
        color: #3F3F3F;
        width: 332px;
        margin: 16px 0 0 16px;
        position: relative;
        border-radius: 4px;
        background: #FFFEFB;
box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    }

    .v-catalog-item__remove {
        animation-duration: 1.1s;
        animation-name: remove_item;
    }

@keyframes remove_item {
    75% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(0);
    }
}

    .v-catalog-item__add {
        animation-duration: 1s;
        animation-name: add_item;
        animation-fill-mode: forwards;
    }

@keyframes add_item {
    35% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}


    .item__img {
        width: 100%;
        border-radius: 4px 4px 0px 0px;
        overflow: hidden;
        height: 200px;
    }

    .item__img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .item__content {
        padding: 16px 16px 24px;
    }

    .item__title {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
    }

    .item__text {
        font-size: 16px;
line-height: 20px;
margin-top: 16px;
height: 80px;
    }

.item__price {
    font-weight: 600;
font-size: 24px;
line-height: 30px;
margin-top: 32px;
}

.basket {
    cursor: pointer;
    pointer-events: none;
    opacity: 0;
    transition: 0.3s;
    position: absolute;
    top:-8px;
    right: -8px;
}

.v-catalog-item:hover .basket {
 pointer-events: auto;
    opacity: 1;
}

.basket:hover {
    top:-16px;
}

</style>