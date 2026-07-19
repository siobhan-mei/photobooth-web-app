<template>
    <div class="site-credit">
        <div class="site-credit-start">
            <slot name="start" />
        </div>
        <p class="site-credit-text">made with ❤️ by @siobhan-mei</p>
    </div>
</template>
<script>
export default {
    name: "SiteCredit",
}
</script>
<style scoped>
.site-credit {
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
.site-credit-start {
    display: flex;
    align-items: center;
    gap: 15px;
}
.site-credit-text {
    font-family: var(--font-cursive);
    font-size: 20px;
    color: #c5c5c5;
    margin: 0;
}
</style>    