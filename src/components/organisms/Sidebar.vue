<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped permanent dark :color="'#19263b'">
      <v-list-item>
        <v-list-item-content>
          <v-icon>sports_basketball</v-icon>
          <v-list-item-title class="title">Basketball Analytics</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <v-subheader class="subtitle-2">Stats</v-subheader>
        <v-list-item @click="home()" class="white--text">
          <v-list-item-action>
            <v-icon>group</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Team</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="carrer()" class="white--text">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Player</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-subheader class="subtitle-2">Analytics</v-subheader>

        <v-list-item @click="twitter_analysis()" class="white--text">
          <v-list-item-action>
            <v-icon>mdi-twitter</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Twitter</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon="menu_book" no-action :color="'white'">
          <template v-slot:activator>
            <v-list-item-title>Blog</v-list-item-title>
          </template>
          <v-list-item @click="blog_analysis()" class="white--text">
            <v-list-item-content>
              <v-list-item-title>どこにでもいるSEの備忘録</v-list-item-title>
              <v-list-item-subtitle>システム開発ブログ</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="machinelearning_blog_analysis()" class="white--text">
            <v-list-item-content>
              <v-list-item-title>Re:ゼロから始めるML生活</v-list-item-title>
              <v-list-item-subtitle>機械学習ブログ</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
import config from "@/config/params.js";

export default {
  name: "Sidebar",
  data: () => ({
    drawer: true
  }),
  methods: {
    contact() {
      window.open(config.contact_url);
    },
    github() {
      window.open(config.this_repository_url);
    },
    home() {
      this.$router.push({ path: "/Search" });
    },
    carrer() {
      this.$router.push({ path: "/Career" });
    },
    twitter_analysis() {
      this.$router.push({ path: "/TwitterAnalysis" });
    },
    blog_analysis() {
      this.$router.push({ path: "/BlogAnalysis" });
    },
    machinelearning_blog_analysis() {
      this.$router.push({ path: "/MachineLearningBlogAnalysis" });
    }
  }
};
</script>
<style scoped>
.title {
  margin-left: 20px;
}
</style>

