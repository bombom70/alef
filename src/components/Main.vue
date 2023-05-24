<template>
  <div class="container">
    <h2 class="title">Персональные данные</h2>
    <form
      @submit.self.prevent="save"
      class="form-person"
    >
      <input
        class="input form-person_input"
        type="text"
        name="name"
        v-model="personData.name"
        placeholder="Имя"
        required
      />
      <input
        class="input form-person_input"
        type="text"
        name="age"
        v-model.number="personData.age"
        placeholder="Возраст"
        required
      />
      <div class="header-children">
        <h2 class="title">Дети (макс. 5)</h2>
        <button v-if="getChildren.length < 5" class="btn btn-clild" @click.prevent="addChilden">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z" fill="#01A7FD"/>
          </svg>
          Добавить ребенка
        </button>
      </div>
      <div v-if="this.counterChild > 0">
        <ChildForm
            v-for="c in getChildren"
            :key="c.id"
            :id="c.id"
        />
      </div>
      <input type="submit" class="btn btn-save" value="Сохранить"/>
    </form>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";
import ChildForm from "@/components/childForm.vue";
import router from "@/router";

export default {
  name: "Main",
  components: {
    ChildForm
  },
  data() {
    return {
      personData: {
        name: "",
        age: ""
      },
      counterChild: 0
    }
  },
  computed: {
    ...mapGetters([
      "getChildren",
      "getPersonData"
    ])
  },
  methods: {
    ...mapMutations(["setPersonData", "setChildren", "resetChildren"]),
    save() {
      this.$store.commit("setPersonData", this.personData)
      this.personData.name = ""
      this.personData.age = ""
      router.push("/preview")
      if (this.counterChild === 0) {
        this.$store.commit("resetChildren")
      }
    },
    addChilden() {
      this.counterChild += 1
      const data = {
        id: Math.random(),
        name: "",
        age: ""
      }
      this.$store.commit("setChildren", data)
    }
  }
}
</script>

<style scoped>
.form-person {
  width: 100%;
  max-width: 616px;
  margin: 0 auto;
}

.form-person_input {
  width: 100%;
}

.header-children {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-clild {
  color: #01A7FD;
  background-color: white;
  border: 2px solid #01A7FD;
  gap: 8px;
}

.btn-save {
  color: white;
  border: none;
  background-color: #01A7FD;
}
</style>