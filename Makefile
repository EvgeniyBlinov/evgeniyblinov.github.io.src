# vim: set noet ci pi sts=0 sw=4 ts=4 :
# http://www.gnu.org/software/make/manual/make.html
# http://linuxlib.ru/prog/make_379_manual.html
SHELL:=/bin/bash

NUXT_PATH = node_modules/.bin/nuxt

#DIRS = bin

# Fake targets
.PHONY: build install

all: build

$(DIRS):
	mkdir -p $@

build: install

install:
	npm install

########################################################################
# NUXT
generate:
	$(NUXT_PATH) generate
