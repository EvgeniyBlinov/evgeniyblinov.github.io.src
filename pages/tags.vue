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
#tags .md-content> section {
    padding-left: 1em;
    font-weight: bold;
}
.md-content> section>ul {
    list-style: none;
}
.md-content> section>ul>li>ul>li {
    width: 10em;
}
#tags .md-content h4 {
    font-weight: bold;
}
@media screen and (min-width: 1024px) {
    #tags .md-content> section>ul {
        -moz-column-count: 4;
        -moz-column-gap: 20px;
        -webkit-column-count: 4;
        -webkit-column-gap: 20px;
        column-count: 4;
        column-gap: 20px;
    }
}
</style>

<template>
    <div :id="$nuxt.$route.name">
        <div class="center">
            <h3 class="center">
                <strong>
                    TAGS
                </strong>
            </h3>
            <div class="md-content" v-html="tags"></div>
        </div>

    </div>
</template>

<script>
  import tags from './tags.md'

  export default {
    computed: {
      tags() {
        return tags
      }
    }
  }
</script>
