<template>
    <div class="rfs-fallback-cablemax-availability-notice" v-if="JSON.stringify(this.$store.state.visitor.basket[0].skus) === JSON.stringify(['2P_RIP_1000_1'])">
        <p>
            <strong>Bitte beachten:</strong> Ohne automatische Verfügbarkeitsprüfung kann nicht festgestellt werden, ob an Deiner Adresse Red Internet and Phone 1000 Cable verfügbar ist. Wir prüfen nach Bestelleingang die Verfügbarkeit und kontaktieren Dich so schnell wie möglich. Sollte Red Internet and Phone 1000 Cable bei Dir nicht verfügbar sein, kannst Du vorerst Red Internet and Phone 500 Cable nutzen oder kostenlos die Bestellung widerrufen.
        </p>
    </div>
</template>

<style scoped>
    strong {
        color: var(--color-vodafone-red);
    }
</style>
