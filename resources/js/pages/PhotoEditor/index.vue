<template>
    <div class="main-bg">
        <TopHeader variant="page" @back-click="playClickSound" />
    </div>
</template>
<script>
import TopHeader from "@components/TopHeader.vue";

export default {
    name: "PhotoEditor",
    components: {
        TopHeader,
    },
    setup() {
        const { play: playClickSound } = useSound(clickSfx, 0.4);
        return { playClickSound };
    },
}
</script>