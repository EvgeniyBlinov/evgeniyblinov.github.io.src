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
.md-content> section {
    padding-left: 1em;
}
</style>

<template>
    <div>
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
