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
    display: inline;
    padding: 0px 0px 0px 0px;
}
.contacts-block {
    font-weight: bold;
}
</style>

<template>
    <div class="center">
        <h3 class="center">
            <strong>
                CONTACTS
            </strong>
        </h3>
        <ul class="contacts-block">
            <li class="row">
                <div class="col text-right">telegram</div>:
                <div class="col text-left">
                    <a v-bind:href="telegram">{{ telegram }}</a>
                </div>
            </li>
            <li class="row">
                <div class="col text-right">email</div>:
                <div class="col text-left">
                    <a v-bind:href="'mailto:' + email">{{ email }}</a>
                </div>
            </li>
            <li class="row">
                <div class="col text-right">github</div>:
                <div class="col text-left">
                    <a v-bind:href="github">{{ github }}</a>
                </div>
            </li>
            <li class="row">
                <div class="col text-right">linkedin</div>:
                <div class="col text-left">
                    <a v-bind:href="linkedin">{{ linkedin }}</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import config from '../../nuxt.config'

export default {
    data() {
        return {
            "skype":    config.data.skype,
            "telegram": config.data.telegram,
            "email":    config.data.email,
            "github":   config.data.github,
            "linkedin": config.data.linkedin
        }
    }
}
</script>
