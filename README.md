# Računalniški Muzej Design Theme

This repository contains all the graphic materials and color templates that can be used when developing apps/websites around Računalniški Muzej infrastructure.

Check `./design_guidelines.pdf` first for actual look and feel and export additional graphics from there if needed.

### Using CSS theme

Refer to `css/example.html` for example how to include theme color and font variables and use them in your project.

You can skip importing `css/fonts.css` and avoid self-hosting fonts if you rather use Google Fonts (https://fonts.google.com/specimen/Roboto):

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

```

## Using with TailwindCSS

A [TailwindCSS](https://tailwindcss.com/) config is also setup for this popular styling framework. Refer to `tailwindcss/` folder for config example.

Following branding colors ara available

```
*-brand-gray-1
*-brand-gray-2
*-brand-gray-3
*-brand-green
*-brand-orange
*-brand-pink
```

and additional custom Računalniški Muzej gradient:

```
bg-gradient
```

Import Roboto font however best suites your project - it is also included in config. Refer to tailwind docs for more info.
