<style>
/*
* { border: 1px solid #f00 !important; }
*/
html { height: 100%; }
body {
    height: 100%;
    background-image: url(~assets/bg.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
#__nuxt { height: 100%; }
#__layout { height: 100%; }
.sidebar1 {
    background: #133F6B;
    /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(#133F6B, #202020);
    /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(#133F6B, #202020);
    /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(#133F6B, #202020);
    /* For Firefox 3.6 to 15 */
    background: linear-gradient(#133F6B, #202020);
    /* Standard syntax */
    padding: 0px;
}
.logo {
    max-height: 130px;
    text-align: center;
}
.logo img {
    margin-top: 30px;
    padding: 3px;
    border: 3px solid white;
    border-radius: 50%;
    height: 64px;
    width: 64px;
}
.list {
    color: #fff;
    /*list-style: none;*/
    padding-left: 0px;
}
.list::first-line {
    color: rgba(255, 255, 255, 0.5);
}
.list> li, h5 {
    padding: 5px 0px 0px 25px;
    margin-left: 10px;
}
.list> li, h5 {
    padding: 5px 0px 5px 25px;
    margin-left: 10px;
}
.list> li> a, label>a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    margin-left: 4.5rem;
}
.list> li> a.noroute, label>a.noroute {
    pointer-events: none;
}
.list>li:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-left: 5px solid white;
    color: white;
    font-weight: bolder;
    padding-left: 20px;
    margin-left: 10px;
}
.sticky-offset {
    top: 56px;
}
.text-cetner {
    text-align: center;
}

.main-content {
    margin-top: 30px;
}
.margin-right-0 {
    margin-right: 0 !important;
}
.margin-right-2em {
    margin-right: 2em !important;
}

/*******************             contact-icons        ****************************/
.contact-icons {
  list-style-type: none;
}
.contact-icons > li {
  display: inline-block;
  margin-right: 1rem;
  font-size: 2rem;
  margin-left: 1rem;
}

.rotateble-icon {
  color: #e5f0f6;
  text-decoration: none;
  transition: all 0.7s ease-in-out 0s;
  display: inline-block;
}
/*******************             contact-icons        ****************************/
</style>

<template>

    <div class="row h-100 margin-right-0">
        <!-- Sidebar BEGIN -->
        <div class="col-md-3 col-sm-4 sidebar1 sidebar-expanded d-md-block">

            <div class="sidebar-content sticky-top sticky-offset">
                <!--LOGO-->
                <div class="logo">
                    <nuxt-link to="/">
                        <img
                            src="~assets/ava-64x64.jpg"
                            class="img-responsive center-block"
                            alt="Logo"
                        >
                    </nuxt-link>
                </div>
                <!--LOGO-->

                <br>

                <div class="left-navigation">

                    <!--
                    <ul class="list">
                        <h5 class="text-center">
                            <strong>MAIN ACTIVITY</strong>
                        </h5>

                        <li>
                            <div class="tree-toggler">
                                <label class="nav-header">IaC</label>
                            </div>
                            <ul class="list tree" style="display: none;">
                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a class="noroute" href="#">software installing</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li>
                                            <div class="tree-toggler">
                                                <label class="nav-header">RDBMS</label>
                                            </div>
                                            <ul class="list tree" style="display: none;">
                                                <li><a class="noroute" href="#">MySQL</a></li>
                                                <li><a class="noroute" href="#">PostgreSQL</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="tree-toggler">
                                                <label class="nav-header">NoSQL</label>
                                            </div>
                                            <ul class="list tree" style="display: none;">
                                                <li><a class="noroute" href="#">MongoDB</a></li>
                                                <li><a class="noroute" href="#">Elasticsearch</a></li>
                                                <li><a class="noroute" href="#">Redis</a></li>
                                                <li><a class="noroute" href="#">Memcache</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="tree-toggler">
                                                <label class="nav-header">MQ</label>
                                            </div>
                                            <ul class="list tree" style="display: none;">
                                                <li><a class="noroute" href="#">RabbitMQ</a></li>
                                                <li><a class="noroute" href="#">Kafka</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="tree-toggler">
                                                <label class="nav-header">Service Discovery</label>
                                            </div>
                                            <ul class="list tree" style="display: none;">
                                                <li><a class="noroute" href="#">Consul</a></li>
                                                <li><a class="noroute" href="#">Etcd</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a class="noroute" href="#">dynamic environment</a></li>
                                <li><a class="noroute" href="#">backups</a></li>
                            </ul>
                        </li>

                        <li>
                            <div class="tree-toggler">
                                <label class="nav-header">Virtualization</label>
                            </div>
                            <ul class="list tree" style="display: none;">
                                <li><a class="noroute" href="#">proxmox kvm</a></li>
                            </ul>
                        </li>

                        <li>
                            <div class="tree-toggler">
                                <label class="nav-header">Containerization (docker)</label>
                            </div>
                            <ul class="list tree" style="display: none;">
                                <li><a class="noroute" href="#">kubernetes</a></li>
                                <li><a class="noroute" href="#">helm</a></li>
                                <li><a class="noroute" href="#">docker-composer</a></li>
                            </ul>
                        </li>

                        <li>
                            <div class="tree-toggler">
                                <label class="nav-header">DevOps Instruments</label>
                            </div>
                            <ul class="list tree" style="display: none;">
                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a class="noroute" href="#">project management systems</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a class="noroute" href="#">jira</a></li>
                                        <li><a class="noroute" href="#">redmine</a></li>
                                        <li><a class="noroute" href="#">gitlab</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a class="noroute" href="#">version-control management</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a class="noroute" href="#">gitolite</a></li>
                                        <li><a class="noroute" href="#">gitlab</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a class="noroute" href="#">continuous integration</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a class="noroute" href="#">gitlab-ci</a></li>
                                        <li><a class="noroute" href="#">gocd</a></li>
                                        <li><a class="noroute" href="#">jenkins</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a class="noroute" href="#">continuous deployment</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a class="noroute" href="#">kubernetes</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <div class="tree-toggler">
                                <label class="nav-header">Backend programming</label>
                            </div>
                            <ul class="list tree" style="display: none;">
                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a class="noroute" href="#">PHP</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a class="noroute" href="#">frameworks</a></li>
                                        <li><a class="noroute" href="#">API</a></li>
                                        <li><a class="noroute" href="#">CRM</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <!--<li class="divider"></li>-->

                    </ul>
                    -->

                    <br>

                    <ul class="list">
                        <h5 class="text-center">
                            <strong class="margin-right-2em">ABOUT</strong>
                        </h5>
                        <li><nuxt-link to="/">Last projects</nuxt-link></li>
                        <li><nuxt-link to="/contacts">Contacts</nuxt-link></li>
                        <li><nuxt-link to="/tags">Tags</nuxt-link></li>
                        <li class="divider"></li>
                    </ul>

                    <br>

                    <div class="center text-center">
                      <ul class="contact-icons">
                          <li>
                              <a v-bind:href="'skype:' + skype + '?call'" class="rotateble-icon">
                                <fa :icon="fab.faSkype" />
                              </a>
                          </li>
                          <li>
                              <a v-bind:href="'mailto:' + email" class="rotateble-icon">
                                <fa :icon="fas.faEnvelope" />
                              </a>
                          </li>
                          <li>
                            <a v-bind:href="github" class="rotateble-icon">
                              <fa :icon="fab.faGithub" />
                            </a>
                          </li>
                          <li>
                            <a v-bind:href="linkedin" class="rotateble-icon">
                              <fa :icon="fab.faLinkedin" />
                            </a>
                          </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sidebar END -->

        <div class="col-md-9 col-sm-8 main-content">
            <nuxt/>
        </div>
    </div>




</template>





<script>

import config from '../nuxt.config'
import $ from 'jquery'
import socialImage from '~/assets/ava_001.jpg'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  head () {
    return {
      meta: [
        {
            'property': 'og:title',
            'content': config.head.title
        },
        {
            'property': 'og:description',
            'content': config.head.description
        },
        {
            'property': 'og:image',
            'content': this.prodBaseUrl + socialImage
        },
        {
            'property': 'og:image:type',
            'content': 'image/jpeg'
        },
        {
            'property': 'og:image:width',
            'content': '1280'
        },
        {
            'property': 'og:image:height',
            'content': '853'
        },
        {
            'property': 'og:type',
            'content': 'website'
        },
        {
            'property': 'og:url',
            'content': 'https://evgeniyblinov.ru/'
        }
      ]
    }
  },
  data() {
    return {
      heading: config.head.title,
      prodBaseUrl: '',
      "skype":    config.data.skype,
      "email":    config.data.email,
      "github":   config.data.github,
      "linkedin": config.data.linkedin
    }
  },
  mounted() {
    $(document).ready(function () {
        $('div.tree-toggler').click(function () {
            $(this).parent().children('ul.tree').toggle(300);
        });
    });
  },
  computed: {
    fas () {
      return fas
    },
    fab () {
      return fab
    }
  },
}
</script>
