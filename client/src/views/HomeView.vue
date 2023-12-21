<template>
    <div>
        <h1 v-show="title">Главная</h1>
    </div>
    <input type="button" value="Click" @click="titleFunc($event), myFunc($event)">
    <div>
        <h2>Hello</h2>
    </div>
    <input type="text" v-model="inputValue" :placeholder="txtInput"><br><br>
    <p>{{ inputValue }}</p>

    <p @click="changClass" :class="classP">Двойные фигурные скобки: <span v-html='rawHtml'></span></p>
</template>

<script>
export default {
    data () {
        return {
            product: [],
            title: false,
            inputValue: null,
            txtInput: 'Введите текст',
            rawHtml: '<span style="color: red">This should be red.</span>',
            rawP: '<p style="color: red">Это П-шка</p>',
            classP: 'red'
        }
    },
    methods: {
        titleFunc(event){
            this.title = !this.title;
        },
        myFunc(event){
            alert('Button clicked!');
        },
        changClass(){
            this.classP = this.classP=='red'?'blue':'red'
        }
    },
    async beforeMount(){

    }
}
</script>

<style  scoped>
    .red{
        color: red;
    }
    .blue{
        color: blue;
    }
</style>

