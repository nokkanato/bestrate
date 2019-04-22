<template>
    <v-content>
        <XSLanding v-show="$vuetify.breakpoint.name === 'xs'"></XSLanding>
        <SMLanding v-show="$vuetify.breakpoint.name === 'sm'"></SMLanding>
        <MediumLanding v-show="$vuetify.breakpoint.name === 'md'"></MediumLanding>
        <LaptopLanding v-show="$vuetify.breakpoint.name === 'lg'"></LaptopLanding>
        <DesktopLanding v-show="$vuetify.breakpoint.name === 'xl'"></DesktopLanding>
    </v-content>
</template>
<script>
import LaptopLanding from '@/components/Laptop/Landing'
import DesktopLanding from '@/components/Desktop/Landing'
import MediumLanding from '@/components/md/Landing'
import SMLanding from '@/components/sm/Landing'
import XSLanding from '@/components/xs/Landing'

export default {
  components: {
    LaptopLanding,
    XSLanding,
    SMLanding,
    MediumLanding,
    DesktopLanding
  }
}
</script>
