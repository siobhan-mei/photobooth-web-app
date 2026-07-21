<template>
    <div class="main-bg" style="flex-direction: column">
    <input
        ref="fileInput"
        type="file"
        accept="image/jpeg,image/png,image/webp"
        class="d-none"
        @change="onFileSelected"
        @click="playClickSound"
    />
        <SiteCredit>
            <template #start>
                <router-link
                    to="/"
                    class="btn white-button"
                    aria-label="Back to home"
                    @click="playClickSound"
                >
                    <BackButton />
                </router-link>
                <div class="card secondary-logo-card">
                    <img :src="logo" class="logo-size" alt="oceanbooth logo" />
                </div>
                <p class="logo-title">OceanBooth</p>
            </template>
        </SiteCredit>
        <div class="main-container">
            <p class="d-flex justify-content-center">Select Template</p>

            <div class="template-grid">
                <!--Template 1-->
                <TemplateCard
                    class="template-column-item"
                    @snap="handleSnap(1)"
                    @upload="handleUpload(1)"
                >
                    <template #visual>
                        <div class="stacked-box"></div>
                    </template>
                </TemplateCard>
                <!--Template 2-->
                <TemplateCard
                    class="template-column-item"
                    @snap="handleSnap(2)"
                    @upload="handleUpload(2)"
                >
                    <template #visual>
                        <div class="stacked-box"></div>
                        <div class="stacked-box"></div>
                    </template>
                </TemplateCard>
                <!--Template 3-->
                <TemplateCard
                    class="template-column-item"
                    @snap="handleSnap(3)"
                    @upload="handleUpload(3)"
                >
                    <template #visual>
                        <div class="stacked-box"></div>
                        <div class="stacked-box"></div>
                        <div class="stacked-box"></div>
                    </template>
                </TemplateCard>
            </div>
        </div>
        <div class="element-container">
            <img
                :src="templateElement1"
                class="template-element-1"
                alt="shell"
            />
            <img
                :src="templateElement2"
                class="template-element-2"
                alt="starfish"
            />
            <img
                :src="templateElement3"
                class="template-element-3"
                alt="turtle"
            />
        </div>
    </div>
</template>

<script>
import SiteCredit from "@components/SiteCredit.vue";
import TemplateCard from "@components/TemplateCard.vue";
import BackButton from "@components/svgs/BackButton.vue";
import logo from "@assets/images/logo.svg";
import templateElement1 from "@assets/images/templateselection-element-1.svg";
import templateElement2 from "@assets/images/templateselection-element-2.svg";
import templateElement3 from "@assets/images/templateselection-element-3.svg";
import clickSfx from "@assets/sfx/click.mp3";
import { useSound } from "@composables/useSound";
import { useUploadPhoto } from "@composables/useUploadPhoto";

export default {
    name: "TemplateSelection",
    components: {
        SiteCredit,
        BackButton,
        TemplateCard,
    },
    setup() {
        const { play: playClickSound } = useSound(clickSfx, 0.4);
        const upload = useUploadPhoto();
        return {
            playClickSound, upload
        };
    },
    data() {
        return {
            logo,
            templateElement1,
            templateElement2,
            templateElement3,
            activeTemplateId: null,
        };
    },
    methods: {
        handleSnap(templateId) {},
        handleUpload(templateId) {
            this.activeTemplateId = templateId;
            this.upload.reset();
            this.$refs.fileInput.click();
        },
        onFileSelected(event) {
            this.upoad.handleInputChange(event);
        },
    },
};
</script>

<style scoped>
.logo-size {
    width: 1.4rem;
    height: 1.4rem;
}
.main-container {
    width: 45%;
    min-height: 450px;
    padding: 40px;
    border: 1px solid black;
    box-shadow: 0 6px 0px rgba(0, 0, 0, 0.319);
    border-radius: 20px;
    background: var(--color-main-container, #e6f6f8);
}
.template-grid {
    display: flex;
    gap: 16px;
    margin-top: 30px;
    height: 360px;
}
.stacked-box {
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 10px;
    flex: 1;
}
.template-column-item {
    flex: 1;
}
.element-container {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.template-element-1 {
    position: absolute;
    width: auto;
    height: 90px;
    rotate: 30deg;
    top: 17%;
    left: 70%;
}
.template-element-2 {
    position: absolute;
    width: auto;
    height: 80px;
    top: 62%;
    left: 25%;
}
.template-element-3 {
    position: absolute;
    width: auto;
    height: 110px;
    rotate: -20deg;
    top: 71%;
    left: 25%;
}
</style>
