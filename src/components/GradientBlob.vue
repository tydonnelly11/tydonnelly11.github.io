<template>
    <div class="gradient-blob" :class="`gradient-blob--${accent}`" :style="blobStyle" aria-hidden="true"></div>
</template>

<script>
export default {
    name: 'GradientBlob',
    props: {
        accent: { type: String, required: true },
        size: { type: String, default: '480px' },
        top: { type: String, default: '0%' },
        left: { type: String, default: '0%' },
    },
    data() {
        return {
            offset: 0,
        };
    },
    computed: {
        blobStyle() {
            return {
                width: this.size,
                height: this.size,
                top: this.top,
                left: this.left,
                transform: `translate3d(0, ${this.offset}px, 0)`,
            };
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const parent = this.$el.parentElement;
            if (!parent) return;
            const rect = parent.getBoundingClientRect();
            const parallaxFactor = 0.15;
            this.offset = rect.top * -parallaxFactor;
        },
    },
};
</script>

<style scoped>
.gradient-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    opacity: 0.55;
    pointer-events: none;
    z-index: 0;
    will-change: transform;
}
.gradient-blob--about { background: radial-gradient(circle, var(--accent-about), transparent 70%); }
.gradient-blob--experience { background: radial-gradient(circle, var(--accent-experience), transparent 70%); }
.gradient-blob--projects { background: radial-gradient(circle, var(--accent-projects), transparent 70%); }
.gradient-blob--education { background: radial-gradient(circle, var(--accent-education), transparent 70%); }
.gradient-blob--skills { background: radial-gradient(circle, var(--accent-skills), transparent 70%); }

@media screen and (max-width: 720px) {
    .gradient-blob {
        filter: blur(40px);
        opacity: 0.4;
    }
}
</style>
