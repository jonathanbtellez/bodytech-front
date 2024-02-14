<template>

    <div>
        <p>
            <b>Name: </b>{{ product.name }}
        </p>
        <p>
            <b>Price: </b>{{ product.price }}
        </p>
        <p>
            <b>User Creator: </b>{{ product.user_creator.name }}
        </p>
        <p>
            <b>User update: </b>{{ product.user_last_update.name }}
    </p>
</div></template>
<script setup>
const props = defineProps(['product'])

</script>
<style></style>