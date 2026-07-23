<template>
    <div class="top-header">
        <div class="top-header-start">
            <template v-if="variant === 'page'">
                <router-link
                    to="/"
                    class="btn white-button"
                    aria-label="Back to home"
                    @click="$emit('back-click')"
                >
                    <BackButton />
            </router-link>
            <div class="card secondary-logo-card">
                    <img :src="logo" class="logo-size" alt="oceanbooth logo" />
            </div>
            <p class="logo-title">OceanBooth</p>
            </template>
            <slot name="start" />
        </div>
        <p class="credit-text">made with ❤️ by @siobhan-mei</p>
    </div>
</template>
<script>
import BackButton from "@components/svgs/BackButton.vue";
import logo from "@assets/images/logo.svg";

export default {
    name: "TopHeader",
    components: {
        BackButton,
    },
    props: {
        variant: {
            type: String,
            default: "home",
            validator: (v) => ["home", "page"].includes(v),
        },
    },
    emits: ["back-click"],
    data() {
        return { logo };
    },
}
</script>
<style scoped>
.logo-size {
    width: 1.4rem;
    height: 1.4rem;
}
.card.secondary-logo-card {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: 1px solid black;
}
.logo-title {
    font-family: "Cardo", serif;
    font-weight: 700;
    margin: 0;
}
.top-header {
    min-height: 10vh;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 3rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.top-header-start {
    display: flex;
    align-items: center;
    gap: 15px;
}
.credit-text {
    font-family: var(--font-cursive);
    font-size: 20px;
    color: #c5c5c5;
    margin: 0;
}
</style>    