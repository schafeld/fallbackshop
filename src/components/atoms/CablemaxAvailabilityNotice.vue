<template>
    <!--
        Alternative sources for information on whether there was an RFS check: this.$store.state.visitor.customer.installationAddress.rfsCheckResult.bcsInfo
        Or .readyForService, but that currently gets set to true even when no RFS check could be made in order to pass checkout form validation.
    -->
    <div class="order-confirmation-cablemax-availability-notice">
            <span v-if="JSON.stringify(this.$store.state.visitor.basket[0].skus) === JSON.stringify(['2P_RIP_1000_1']) && this.$store.state.visitor.customer.installationAddress.buildingId === 'unknownrfs'">
            <p>
                <strong>Bitte beachten:</strong> Ohne automatische Verfügbarkeitsprüfung kann nicht festgestellt werden, ob an Deiner Adresse Red Internet and Phone 1000 Cable verfügbar ist. Wir prüfen nach Bestelleingang die Verfügbarkeit und kontaktieren Dich so schnell wie möglich. Sollte Red Internet and Phone 1000 Cable bei Dir nicht verfügbar sein, kannst Du vorerst Red Internet and Phone 500 Cable nutzen oder kostenlos die Bestellung widerrufen.
            </p>

            <!-- Hidden input for passing parameter to order form indicating uncertain avalability in order confirmation email. -->
            <input type="hidden" name="_show_cablemax_avalability_notice" value="Yes">
        </span>
        <span v-else>
            <input type="hidden" name="_show_cablemax_avalability_notice" value="No">
        </span>
    </div>
</template>

<style scoped>
    strong {
        color: var(--color-vodafone-red);
    }
</style>
