<template>
  <div id="app">
    <vueTree :options="options" :value="[8]"></vueTree>
  </div>
</template>

<script>
import vueTree from './components/VueTree/treeSelect'

export default {
  name: 'App',
  components: {
    vueTree
  },
  data() {
    return {
      // data
      options: [
        {
          value: 1,
          text: "No.1"
        },
        {
          value: 2,
          text: "No.2"
        },
        {
          value: 3,
          text: "No.3",
          children: [
            {
              value: 4,
              text: "No.4"
            }, {
              value: 5,
              text: "No.5"
            }]
        },{
          value: 6,
          text: "No.6",
          children: [
            {
              value: 7,
              text: "No.7"
            }, {
              value: 8,
              text: "No.8"
            }]
        },{
          value: 999,
          text: "No.999",
          children:[
            {
              value: 9999,
              text: "No.9999",
            }
          ]
        },
      ]
    }

  }
}
</script>

<style>

</style>
