<style>
.project-block__list li {
    padding: 1em 0px 1em 0px;
}
.project-item__year {
    padding-right: 10px;
    font-weight: bold;
}
h3.center {
    text-align: center;
}
.text-left {
    text-align: left;
}
.text-right {
    text-right: left;
    margin-left: -8em;
}
.contacts-block {
    font-weight: bold;
}

/*******************             projects        ****************************/
.md-content > section > ul > li {
    margin-bottom: 1rem;
}
.md-content > section > ul > li > p {
    margin-bottom: 0;
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
</style>

<template>
    <div>
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
            <h3 class="center">
                <strong>
                    LAST PROJECTS
                </strong>
            </h3>

            <div class="md-content" v-html="projects"></div>

        </div>

        <div class="center">
            <h3 class="center">
                <strong>
                    CONTACTS
                </strong>
            </h3>
            <ul class="contacts-block">
                <li class="row">
                    <div class="col text-right">skype</div>:
                    <div class="col text-left">
                        <a href="skype:evgeniy_blinov?call">evgeniy_blinov</a>
                    </div>
                </li>
                <li class="row">
                    <div class="col text-right">email</div>:
                    <div class="col text-left">
                        <a href="mailto:evgeniy_blinov@mail.ru">evgeniy_blinov@mail.ru</a>
                    </div>
                </li>
                <li class="row">
                    <div class="col text-right">github</div>:
                    <div class="col text-left">
                        <a href="https://github.com/EvgeniyBlinov/">https://github.com/EvgeniyBlinov/</a>
                    </div>
                </li>
                <li class="row">
                    <div class="col text-right">linkedin</div>:
                    <div class="col text-left">
                        <a href="https://www.linkedin.com/in/blinovevgeniy/">https://www.linkedin.com/in/blinovevgeniy/</a>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
  import projects from './projects.md'

  export default {
    computed: {
      projects() {
        return projects
      }
    }
  }
</script>
