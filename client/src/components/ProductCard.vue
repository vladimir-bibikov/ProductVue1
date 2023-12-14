<template>
    <div class="product-card">
        <img :src="baseURL + product.attributes.img.data.attributes.url"  alt="">
        <h3>{{ product.attributes.title }}</h3>
        <p>{{  product.attributes.description }}</p>
        <p>{{ product.attributes.price }}</p>
    </div>
</template>

<script>
export default {
    props: {
        product: {},
    },
    data () {
        return {
            baseURL: 'http://localhost:1337'
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

    & img{
        width: 100%;
    }
}
</style>