<template>
  <header>
    <nav>
      <router-link to="/need">Нужда</router-link>
      <router-link to="/thank">Благодарность</router-link>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped lang="scss">
header {
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid red;

  div {
    display: flex;
    gap: 20px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    gap: 30px;
    font-size: 12px;

    a {
      color: red;
      text-decoration: none;

      &.router-link-active {
        color: orange;
        text-decoration: none;
        border-bottom: 1px solid orange;
        padding-bottom: 2px;
      }

      &:hover {
        color: yellow;
        text-decoration: none;
      }
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: red;
    }
  }
}
</style>