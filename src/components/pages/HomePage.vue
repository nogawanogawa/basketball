<template>
  <HomeLayout></HomeLayout>
</template>

<script>
import HomeLayout from "@/components/templates/HomeLayout.vue";

export default {
  name: "Home",
  components: {
    HomeLayout
  },
  props: {
    source: String
  },
  data: () => ({}),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>