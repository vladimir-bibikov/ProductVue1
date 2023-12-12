<template>
    <div class="product-card">
        <img src="JS2.jpg" alt="">
        <h3>Title</h3>
        <p>Description</p>
        <p>2500</p>
    </div>
</template>

<script>
export default {
    props: {
        product: {},
    },
    data () {
        return {
            
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