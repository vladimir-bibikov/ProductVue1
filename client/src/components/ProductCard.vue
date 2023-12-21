<template>
    <div class="product-card">
        <div v-if="product.attributes.sale" class="sale">Sale</div>
        <img :src="baseURL + product.attributes.img.data.attributes.url"  alt="">
        <h3>{{ product.attributes.title }}</h3>
        <p>{{  product.attributes.description }}</p>
        <p :class="{ price: priceRedact }">{{ product.attributes.price }}</p>
        <h4 v-if="product.attributes.sale">{{ product.attributes.sale }}</h4>
        <button @click="$emit('myFunc',this.product.attributes.price)">Редакт.</button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        product: {},
    },
    data () {
        return {
            baseURL: 'http://localhost:1337',
        }
    },
    methods: {
        // myFunc(){
        //     const priceChild = this.product.attributes.price
        //     this.$emit('changePE', priceChild)
        // }
    },
    computed: {
      priceRedact(){
        let sale = this.product.attributes.sale
        return sale > 0 ? true: false
      }
    }
}
</script>

<style scoped>
.product-card{
    width: 200px;
    height: 300px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 15px;
    position: relative;

    & .sale{
        display: flex;
        flex-direction: column;
        padding: 8px;
        position: absolute;
        top: 10px;
        left: -10px;
        background-color: red;
        border-radius: 0 10px;
        color: white;
    }

    & .price{
        text-decoration: line-through;
    }

    & img{
        width: 100%;
    }
}
</style>