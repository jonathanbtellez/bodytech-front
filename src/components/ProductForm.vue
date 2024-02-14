<template>
    <div>
        <h1>Create product</h1>
        <form>
            <div>
                <label for="name">Name</label>
                <input v-model="name" placeholder="Product name" id="name" />
            </div>
            <div>
                <label for="price">Price</label>
                <input v-model="price" placeholder="Product price" />
            </div>

        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const name = ref()
const price = ref()


</script>
