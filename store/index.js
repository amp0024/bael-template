import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      menuIsActive: false,
      menuInitial: true,
      blogPosts: [],
      servPosts: [],
      allPages: [],
      navheight: 60,
      blogTitle: '',
      siteInfo: [],
      connect: [],
      allTags: [],
      gridItems: [],
      gridNumPosts: '6',
      gridNumCats: '11',
      gridNumServ: '11',
      gridOffset: '0',
      theThumbnail: '',
      theCategory: '',
      theCrumb: '',
      allCats: [],
      // allServices: [],
      results: [],
      resultsnum: [],
      pagination: false,
      menuIsActive: false,
      menuInitial: true,
    },
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('getSiteInfo')
        await dispatch('getBlogPosts')
        await dispatch('getServicesPosts')
        await dispatch('getPages')
        await dispatch('getCats')
        await dispatch('getServs')
      },
      async getBlogPosts({ state, commit }) {
        const context = await require.context('~/content/blog/posts/', false, /\.json$/);

        const searchposts = await context.keys().map(key => ({
          ...context(key),
          _path: `/blog/${key.replace('.json', '').replace('./', '')}`
        }));



        commit('SET_POSTS', searchposts.reverse())

      },
      async getServicesPosts({ state, commit }) {
        const context = await require.context('~/content/services/posts/', false, /\.json$/);

        const searchservices = await context.keys().map(key => ({
          ...context(key),
          _path: `/service/${key.replace('.json', '').replace('./', '')}`
        }));



        commit('SET_SERVICES', searchservices.reverse())

      },
      async getPages({ state, commit }) {


        const context = await require.context('~/content/page/posts/', false, /\.json$/);

        const pages = await context.keys().map(key => ({
          ...context(key),
          _path: `/page/${key.replace('.json', '').replace('./', '')}`
        }));

        commit('SET_PAGES', pages)

      },
      setGridNumPosts({ state, commit }) {
        if (state.blogPosts > 7) {
          this.$store.commit("SET_GRIDNUMPOSTS", 6);
        }
      },
      setGridNumCats({ state, commit }) {
        if (state.allCats > 13) {
          this.$store.commit("SET_GRIDNUMCATS", 12);
        }
      },
      setGridNumServ({ state, commit }) {
        if (state.allServices > 13) {
          this.$store.commit("SET_GRIDNUMSERV", 12);
        }
      },

      async getCats({ state, commit }) {


        const context = await require.context('~/content/categories/posts/', false, /\.json$/);

        const pages = await context.keys().map(key => ({
          ...context(key),
          _path: `/category/${key.replace('.json', '').replace('./', '')}`
        }));

        commit('SET_CATS', pages)

      },
      async getServs({ state, commit }) {


        const context = await require.context('~/content/services/posts/', false, /\.json$/);

        const pages = await context.keys().map(key => ({
          ...context(key),
          _path: `/service/${key.replace('.json', '').replace('./', '')}`
        }));

        commit('SET_SERVICES', pages)

      },
      async getTags({ state, commit }) {


        const context = await require.context('~/content/tags/posts/', false, /\.json$/);

        const pages = await context.keys().map(key => ({
          ...context(key),
          _path: `/tagged/${key.replace('.json', '').replace('./', '')}`
        }));

        commit('SET_TAGS', pages)

      },
      getSiteInfo({ state, commit }) {
        const info = require('~/content/setup/info.json');
        const connect = require('~/content/setup/connect.json');
        const context = require.context('~/content/blog/posts/', false, /\.json$/);

        const searchposts = context.keys().map(key => ({
          ...context(key),
          _path: `/blog/${key.replace('.json', '').replace('./', '')}`
        }));
        // const searchservices = context2.keys().map(key => ({
        //   ...context(key),
        //   _path: `/services/${key.replace('.json', '').replace('./', '')}`
        // }));
        // console.log(searchservices)


        commit('SET_POSTS', searchposts)
        // commit('SET_SERVICES', searchservices)
        commit('SET_INFO', info)
        commit('SET_CONNECT', connect)

      }
    },
    mutations: {
      SET_POSTS(state, data) {
        state.blogPosts = data
      },
      // SET_SERVICE(state, data) {
      //   state.servPosts = data
      // },
      SET_PAGES(state, data) {
        state.allPages = data
      },
      SET_CATS(state, data) {
        state.allCats = data
      },
      SET_SERVICES(state, data) {
        console.log(data)
        state.allServices = data
      },
      SET_CRUMB(state, data) {
        state.theCrumb = data
      },
      SET_GRIDITEMS(state, data) {
        state.gridItems = data
      },
      SET_GRIDNUMPOSTS(state, data) {
        state.gridNumPosts = data
      },
      SET_GRIDNUMCATS(state, data) {
        state.gridNumCats = data
      },
      SET_GRIDNUMSERV(state, data) {
        state.gridNumServ = data
      },
      SET_GRIDOFFSET(state, data) {
        state.gridOffset = data
      },
      SET_POSTCAT(state, data) {
        state.theCategory = data
      },
      SET_TAGS(state, data) {
        state.allTags = data
      },
      SET_THUMB(state, data) {
        state.theThumbnail = data
      },
      SET_TITLE(state, data) {
        state.blogTitle = data
      },
      SET_NAVHEIGHT(state, data) {
        state.navheight = data
      },
      SET_INFO(state, data) {
        state.siteInfo = data
      },
      SET_CONNECT(state, data) {
        state.connect = data
      },
      SET_RESULTS(state, data) {
        state.results = data
      },
      paginateOn(state, data) {
        state.pagination = data
      },
      paginateOff(state, data) {
        state.pagination = data
      },
      resultsLength(state, data) {
        state.resultsnum = data
      },
      setMenuState(state, menuIsActive) {
        state.menuIsActive = menuIsActive
      },

      toggleMenuState(state) {
        state.menuIsActive = !state.menuIsActive
      },

    }
  })

export default createStore
