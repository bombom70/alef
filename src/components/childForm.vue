<template>
  <form
      class="form-child"
      @submit.prevent="remove"
  >
    <input @change="changeChildValues" type="text" v-model="name" class="input form-child_input" placeholder="Имя"/>
    <input @change="changeChildValues"  type="text" v-model="age" class="input form-child_input" placeholder="Возраст"/>
    <input type="submit" class="form-child_remove" value="Удалить"/>
  </form>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "childForm",
  props: ["id"],
  data() {
    return {
      name: "",
      age: ""
    }
  },
  methods: {
    ...mapMutations(["removeChildren", "changeChildValue"]),
    remove() {
      this.$store.commit("removeChildren", this.id)
    },
    changeChildValues() {
      const data = {
        id: this.id,
        name: this.name,
        age: this.age,
      }
      this.$store.commit("changeChildValue", data)

    }
  }
}
</script>

<style>
.form-child {
  display: flex;
  gap: 18px;
}

.form-child_remove {
  border: 2px solid white;
  padding: 10px 20px;
  background: none;
  color: #01A7FD;
  cursor: pointer;
}

.form-child_remove:hover {
  border: 2px solid #01A7FD;
  border-radius: 45px;
  transition: 0.1s;
}

.form-child_input {
  flex: 1 1 auto;
}
</style>