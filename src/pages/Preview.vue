<template>
  <div class="container">
    <div class="person-data">
      <h2 class="title">Персональные данные</h2>
      <span class="data-text">{{ getPersonData.name }}, {{ getPersonData.age }}</span>
    </div>
    <div class="children">
      <h2 class="title">Дети</h2>
      <div class="children-list" v-if="getChildren.length">
        <div class="wrapper-item" v-for="child in getChildren" :key="child.id">
          <span class="children__item data-text">
            {{ child.name }}, {{ child.age }}
          </span>
        </div>
      </div>
      <div v-else>
        <span class="data-text">Нет детей</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Preview",
  computed: {
    ...mapGetters([
      "getChildren",
      "getPersonData"
    ])
  },
}
</script>

<style>
.data-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.children-list {
  display: flex;
  flex-direction: column;
}

.wrapper-item {
  margin: 20px 0;
}

.children__item {
  background-color: #F1F1F1;
  padding: 10px 20px;
}
</style>