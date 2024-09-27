

<script>


import { onMounted } from 'vue'
onMounted(async () => {
  let res = await window.myApi.handleSend('liaoruiruirurirui')
  console.log(res)
})

</script>