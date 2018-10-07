<style>
html { height: 100%; }
body { height: 100%; }
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
.logo>img {
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
.text-cener {
    text-align: center;
}

.main-content {
    margin-top: 30px;
}
</style>

<template>

    <div class="row h-100">
        <!-- Sidebar BEGIN -->
        <div class="col-md-3 col-sm-4 sidebar1 sidebar-expanded d-md-block">

            <div class="sidebar-content sticky-top sticky-offset">
                <!--LOGO-->
                <div class="logo">
                        <img
                            src="~assets/ava-64x64.jpg"
                            class="img-responsive center-block"
                            alt="Logo"
                        >
                </div>
                <!--LOGO-->

                <br>

                <div class="left-navigation">

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
                                        <label class="nav-header"><a href="#">software installing</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li>
                                            <div class="tree-toggler">
                                                <label class="nav-header">RDBMS</label>
                                            </div>
                                            <ul class="list tree" style="display: none;">
                                                <li><a href="#">MySQL</a></li>
                                                <li><a href="#">PostgreSQL</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="tree-toggler">
                                                <label class="nav-header">NoSQL</label>
                                            </div>
                                            <ul class="list tree" style="display: none;">
                                                <li><a href="#">MongoDB</a></li>
                                                <li><a href="#">Elasticsearch</a></li>
                                                <li><a href="#">Redis</a></li>
                                                <li><a href="#">Memcache</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="tree-toggler">
                                                <label class="nav-header">MQ</label>
                                            </div>
                                            <ul class="list tree" style="display: none;">
                                                <li><a href="#">RabbitMQ</a></li>
                                                <li><a href="#">Kafka</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="tree-toggler">
                                                <label class="nav-header">Service Discovery</label>
                                            </div>
                                            <ul class="list tree" style="display: none;">
                                                <li><a href="#">Consul</a></li>
                                                <li><a href="#">Etcd</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">dynamic environment</a></li>
                                <li><a href="#">backups</a></li>
                            </ul>
                        </li>

                        <li>
                            <div class="tree-toggler">
                                <label class="nav-header">Virtualization</label>
                            </div>
                            <ul class="list tree" style="display: none;">
                                <li><a href="#">proxmox kvm</a></li>
                            </ul>
                        </li>

                        <li>
                            <div class="tree-toggler">
                                <label class="nav-header">Containerization (docker)</label>
                            </div>
                            <ul class="list tree" style="display: none;">
                                <li><a href="#">kubernetes</a></li>
                                <li><a href="#">helm</a></li>
                                <li><a href="#">docker-composer</a></li>
                            </ul>
                        </li>

                        <li>
                            <div class="tree-toggler">
                                <label class="nav-header">DevOps Instruments</label>
                            </div>
                            <ul class="list tree" style="display: none;">
                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a href="#">project management systems</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a href="#">jira</a></li>
                                        <li><a href="#">redmine</a></li>
                                        <li><a href="#">gitlab</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a href="#">version-control management</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a href="#">gitolite</a></li>
                                        <li><a href="#">gitlab</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a href="#">continuous integration</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a href="#">gitlab-ci</a></li>
                                        <li><a href="#">gocd</a></li>
                                        <li><a href="#">jenkins</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <div class="tree-toggler">
                                        <label class="nav-header"><a href="#">continuous deployment</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a href="#">kubernetes</a></li>
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
                                        <label class="nav-header"><a href="#">PHP</a></label>
                                    </div>
                                    <ul class="list tree" style="display: none;">
                                        <li><a href="#">frameworks</a></li>
                                        <li><a href="#">API</a></li>
                                        <li><a href="#">CRM</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <!--<li class="divider"></li>-->

                    </ul>

                    <br>

                    <ul class="list">
                        <h5 class="text-center">
                            <strong>ABOUT</strong>
                        </h5>
                        <li>Contacts</li>
                        <li>Tags</li>
                        <li class="divider"></li>
                    </ul>
                        <br>
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

export default {
  data() {
    return {
      heading: config.head.title
    }
  },
  mounted() {
    $(document).ready(function () {
        $('div.tree-toggler').click(function () {
            $(this).parent().children('ul.tree').toggle(300);
        });
    });
  }
}
</script>
