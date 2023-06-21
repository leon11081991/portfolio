<template>
  <section class="actions-section">
    <button class="print-button" @click="openPrintPage">
      <Icon name="print" class="noGap" />
    </button>
  </section>

  <div class="box">
    <div class="person-info">
      <Title class="person-info-name" :text="fullName" />
      <SubTitle class="person-info-position" :text="position" />
    </div>
    <div class="person-photo">
      <img class="person-photo-image" src="~@/assets/photo.png" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Resume/Title.vue";
import SubTitle from "@/components/Resume/SubTitle.vue";
import Icon from "@/components/Base/Icon.vue";

export default {
  Name: "Header",
  components: { Title, SubTitle, Icon },
  computed: {
    currentResumeData() {
      return this.$store.state.resume.currentLanguage.data;
    },

    fullName() {
      const data = this.currentResumeData;
      const chName = data.name["chName"];
      const engName = data.name["engName"];
      return `${chName} ${engName}`;
    },

    position() {
      return this.currentResumeData.position;
    },
  },

  methods: {
    openPrintPage() {
      window.print();
    },
  },
};
</script>

<style lang="scss" scoped>
.actions-section {
  display: flex;
  position: absolute;
  align-items: center;
}

.language-switcher {
  padding: 10px;
}

.print-button {
  padding: 10px;
  width: auto;
  height: auto;
  border: none !important;
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: rgba($primary, 0.1);
    transition: all 0.5s ease-out;
  }
}

.person-info {
  display: flex;
  flex-direction: column;
}

.person-info-name {
  margin: 0;
  font-weight: 700;
  font-size: 2em;
  letter-spacing: 2px;
  color: $white;
}

.person-info-position {
  margin: 0px;
  font-weight: 400;
}

.box {
  padding: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.person-photo {
}

.person-photo-image {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

@media (max-width: 21cm) {
  .box {
    padding-top: 20px;
    flex-direction: column-reverse;
  }

  .person-info {
    align-items: center;
    justify-content: center;
  }

  .person-photo {
    padding-bottom: 20px;
  }

  .person-info-name,
  .person-info-position {
    text-align: center;
  }

  .actions-section {
    width: 100%;
    justify-content: space-between;
  }
}

@media print {
  .actions-section {
    display: none;
  }

  .box {
    padding-top: 0px;
    flex-direction: column-reverse;
  }
}
</style>
