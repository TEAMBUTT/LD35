# Hater

Hater is an opinionated starting point for building games with
[LÖVE](https://love2d.org). It was born out of my experience in competing in
competitions like (Ludum Dare)(http://ludumdare.com/compo/) and my old LÖVE
skeleton, [Hatred](https://github.com/jarednorman/hatred).

## Getting Started

In the long run, I'd like to rewrite this as generator style thing, currently
you just clone this repo, and find and replace "hater" with your project's name
in all the places.

```sh
# Ensure you have loverocks installed.
# To fetch the luarocks dependencies:
$ loverocks deps
```

## Details

This project is based off of [loverocks](https://github.com/Alloyed/loverocks)
which makes it easy to use luarocks packages in a LÖVE project. See the
loverocks project for usage and caveats.

### Rocks included by default

- [middleclass](https://luarocks.org/modules/kikito/middleclass): A simple OOP library for Lua
