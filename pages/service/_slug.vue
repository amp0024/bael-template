<template>
<div>{{findServPosts}}</div>
  <!-- <BaelGrid :allitems="findServPosts"></BaelGrid> -->
</template>

<script>
// import BaelGrid from '~/components/BaelGrid'
export default {
    async asyncData({ params, app, payload, route, store }) {
    let post = await import("~/content/services/posts/" + params.slug + ".json");
    console.log(post);
    await store.commit("SET_TITLE", post.title);
    await store.commit("SET_CRUMB", 'Service');
    return post;
  },
  head() {
    return {
      title: this.title + " | " + this.$store.state.siteInfo.sitename
    };
  },
  // components: {BaelGrid},
  //    transition (to, from) {
  //   if (!from) return 'slide-right'
  //   return +to.query.page > +from.query.page ? 'slide-right' : 'slide-left'
  // },
  data() {
    return {};
  },
  methods: {
      theSlug() {
      return this.$route.params.slug
    },
  },
   
  computed: {
    allServicePosts() {
      return this.$store.state.allServices;
    },
  

    findServPosts() {
      var posts = this.allServicePosts;
      var title = this.title
      return posts.filter(function(obj) {
        return obj.title == title
      });
    }
   
  }
};
</script>

<style>
.browse a {
  width: 100%;
}
.search:focus {
  outline: none;
}
.footer__heading {
  text-transform: uppercase;
}
nav .r {
  grid-gap: 0;
}
.r.full-height {
  grid-gap: 0;
}
@media only screen and (max-width: 40rem) {
  .xs-collapse {
    visibility: hidden;
    visibility: collapse;
    border: 0 !important;
    border-color: none !important;
    padding: 0 !important;
  }
  .xs-visible {
    visibility: visible;
  }
}
</style>
