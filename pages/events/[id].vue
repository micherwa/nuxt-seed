<script setup>
    const route = useRoute();

    console.log(route.params);
</script>

<template>
    <div>
        route id : {{ $route.params.id }}
    </div>
</template>