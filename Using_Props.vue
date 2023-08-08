<script>
import ModalWar from './components/ModalWar.vue'

export default {
  components: {
    ModalWar
  },
  data () {
    return {
      value: 'Value passed from parent'
    }
  }
}
</script>

///////////////////////
modalwar
<template>
    <DIV id="GR">
        <h1>
            {{value}} is very Uncertain
        </h1>
    </DIV>
</template>

<script>
export default {
    name: "ModalWar",
    props: ['value'],
}
</script>