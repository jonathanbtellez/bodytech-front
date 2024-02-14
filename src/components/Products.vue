<template >
    <div>
        <button @click="canSeeForm = !canSeeForm">Create product</button>
        <div v-if="canSeeForm">
            <ProductForm />
        </div>
        <h1>Products</h1>
        <hr />
        <table class="table-container">
            <tr>
                <th class="table_row">Name</th>
                <th class="table_row">Price</th>
                <th class="table_row">Created by</th>
                <th class="table_row">Updated by</th>
                <th class="table_row">Action</th>
            </tr>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.user_creator.name }}</td>
                    <td>{{ product.user_last_update.name }}</td>
                    <td>
                        <button class="button-success" @click="onSee(product.id)">See</button>
                        <button class="button-info">Update</button>
                        <button class="button-danger" @click="onDelete(product.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="canSeeProduct">
        <button class="button-info" @click="canSeeProduct = !canSeeProduct">Hide</button>

        <Product :product="product" />
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiProducts from '../api/apiProducts'
import Product from './Product.vue';
import ProductForm from './ProductForm.vue';

const products = ref([])
const canSeeProduct = ref(false)
const canSeeForm = ref(false)

const product = ref({})


onMounted(async () => {
    const { data } = await apiProducts()
    products.value = data.products
    console.log(products.value)
})

const onSee = async (id) => {
    try {

        const { data } = await apiProducts(`/${id}`)
        product.value = data.product
        canSeeProduct.value = true
    } catch (err) {
        console.error(err)
    }
}

const onDelete = async (id) => {
    try {
        await apiProducts.delete(`/${id}`)
        alert(`Deleted ${product.id}`)
    } catch (err) {
        console.error(err)
    }
}

</script>
<style scoped>
.table-container {
    width: 90%;
    text-align: left;
    margin: auto;
}

.table_row {
    text-align: center;
    padding: .5rem;
    box-shadow: 0px 0px 2px 0px black;
    background-color: black;
    color: white;
}

.button-danger {
    background-color: tomato;
    padding-top: .4rem;
    padding-bottom: .4rem;
    padding-left: .8rem;
    padding-right: .8rem;
    border-radius: 10%;
    border: none;
    cursor: pointer;
}

.button-info {
    background-color: gray;
    padding-top: .4rem;
    padding-bottom: .4rem;
    padding-left: .8rem;
    padding-right: .8rem;
    border-radius: 10%;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 500;
}

.button-success {
    background-color: green;
    padding-top: .4rem;
    padding-bottom: .4rem;
    padding-left: .8rem;
    padding-right: .8rem;
    border-radius: 10%;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 500;
}
</style>