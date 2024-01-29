<style>
/*******************             projects        ****************************/
.md-content > section > ul > li {
    margin-bottom: 1rem;
    padding: 1em 0px 0px 0px;
}
.md-content > section > ul > li > p {
    margin-bottom: 0;
    font-weight: bold;
}
.md-content > section > ul > li > h6 ~ p ~ p {
    display: inline;
}
.md-content > section > ul > li > h6 ~ ul {
    list-style-type: none;
    display: inline;
    padding-left: 0;
}
.md-content > section > ul > li > h6 ~ ul > li {
    display: inline-block;
}
.md-content > section > ul > li > h6 ~ ul > li::after {
    content: ",";
}
/*******************             projects        ****************************/
h1 {
    font-weight: bold;
    text-align: center;
}
</style>

<template>
    <div :id="$nuxt.$route.name">
    <!--<pre>-->
        <!--Base programming languages: PHP; JS; Python; SQL; Delphi; Bash & (awk, sed,-->
        <!--sqlite ...); Go;-->
        <!--Tools: docker; vagrant; ansible; munin; composer; grunt; gulp; nodejs; npm;-->
        <!--bower; nginx; rabbitMQ;-->
        <!--PHP-frameworks: SlimMVC; Yii1/2; Symfony2; ZF1/2; CakePHP; CodeIgniter; Laravel;-->
        <!--ES6: backbone.js; require.js; node.js; express.js;-->
        <!--Databases: MySQL; MariaDB; PostgreSQL; MongoDB; Redis; Sphinx;-->
        <!--Can understand: C; C++; lua; Perl; Java; Ruby; D lang;-->
        <!--api integration: slack; twilio; stripe; google; aws; geocodio; mailgun;-->
    <!--</pre>-->

        <div class="center">
            <h1>{{ h1 }}</h1>

            <h3 class="center">
                <strong>
                    LAST PROJECTS
                </strong>
            </h3>

            <div class="md-content" v-html="projects"></div>

        </div>

        <app-contacts />

    </div>
</template>

<script>
  import config from '../nuxt.config'
  import projects from './projects.md'
  import AppContacts from "./_contacts/contacts"

  export default {
    components: {
        AppContacts
    },
    computed: {
      projects() {
        return projects
      }
    },
    data() {
      return {
          "h1": config.data.shortIntro
      }
    }
  }
</script>
