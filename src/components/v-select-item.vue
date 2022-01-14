<template>
  <p class='v-select-item' @click='selectClick'>{{select}}</p>
</template>

<script>



export default {
    name: 'v-select-item',
    props: {
        select: {
            type: String
        }
    },
    methods: {
        selectClick() {
            this.$emit('selectClick')
        }
    }
}
</script>

<style scope>
.v-select-item {
    padding: 10px 14px;
     font-size: 10px;
line-height:1;
color: #B4B4B4;
border-bottom: 1px solid #B4B4B4;
cursor: pointer;
transition: 0.3s;
}

.v-select-item:hover {
    background: #B4B4B4;
    color: #fff;
}


.v-select-item:last-child {
    border-bottom: 0;
}
</style>