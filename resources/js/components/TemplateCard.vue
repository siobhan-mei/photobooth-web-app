<template>
    <div class="template-card">
        <div class="template-secondary-card">
            <slot name="visual" />
        </div>
        <div class="template-card-actions">
            <button class="btn pink-button" @click="$emit('snap')">
                Snap Photo
            </button>
            <button class="btn pink-button" @click="$emit('upload')">
                Upload Photo
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "TemplateCard",
    emits: ['snap', 'upload'],
};
</script>
<style scoped>
.template-card {
    position: relative;
    background: var(--color-secondary-container, #c8e6ea);
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
}
.template-secondary-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    padding: 15px;
}
.template-card-actions {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
}
.template-card:hover .template-card-actions{
    opacity: 1;
    pointer-events: auto;
    background: var(--color-secondary-container, #c8e6ea);
}
</style>