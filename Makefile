# Makefile for RedPen documentation
#

.PHONY: help clean pdf check
SOURCES = main.adoc chapter1.adoc

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo " pdf      to make standalone PDF"
	@echo " check    to check texts"

pdf:
	asciidoctor-pdf -a pdf-style=res/themes/basic.yml -a pdf-fontsdir=res/fonts main.adoc

check:
	redpen -f asciidoc $(SOURCES)
