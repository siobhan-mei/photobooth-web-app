<template>
    <div class="absolute-bg-container">
        <img
            v-for="(item, index) in images"
            :key="index"
            :src="item.src"
            class="float"
            :style="{
                width: item.width + 'px',
                marginLeft: item.marginLeft
                    ? item.marginLeft + 'px'
                    : undefined,
                marginBottom: item.marginBottom
                    ? item.marginBottom + 'px'
                    : undefined,
                animationDelay: index * 0.5 + 's',
            }"
            alt="polaroid"
        />
    </div>
</template>

<script>
export default {
    name: "FloatingPolaroids",
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.absolute-bg-container {
    position: absolute;
    bottom: 0;
    z-index: 0;
}
.float {
    animation: float 3s ease-in-out infinite;
}
@keyframes float {
    0%,
    100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-15px);
    }
}
</style>
