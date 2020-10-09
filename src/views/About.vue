<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="click">request</button>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$api.departmentList()
    }
  }
}
</script>
