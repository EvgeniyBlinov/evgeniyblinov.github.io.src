# vim: set noet ci pi sts=0 sw=4 ts=4 :
# http://www.gnu.org/software/make/manual/make.html
# http://linuxlib.ru/prog/make_379_manual.html
SHELL:=/bin/bash

NUXT_PATH = node_modules/.bin/nuxt
SITE_NAME = evgeniyblinov.github.io
GITHUB_ACCOUNT = EvgeniyBlinov

#DIRS = bin

# Fake targets
.PHONY: build install copy generate nuxt-generate

all: build

$(DIRS):
	mkdir -p $@

build: install $(SITE_NAME)

$(SITE_NAME):
	git clone git@github.com:$(GITHUB_ACCOUNT)/$@.git

install:
	npm install

# rsync -rtvuc ./dist/ ../deploy/
# --exclude-from 'exclude-list.txt'
copy:
	rsync -rlpcgoDvzi \
		--exclude '.git' \
		--delete \
		./dist/ ./$(SITE_NAME)/

generate: nuxt-generate copy
########################################################################
# NUXT

nuxt-generate:
	$(NUXT_PATH) generate
