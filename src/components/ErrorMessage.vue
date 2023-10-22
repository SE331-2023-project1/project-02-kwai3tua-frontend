<script setup lang="ts">
defineProps({
    id: {type: String, required: true}
})
</script>

<template>
    <p aria-live="assertive" class="errorMessage" :id="id">
        <slot />
    </p>
</template>