---
layout: page.njk
title: Blog
description: Posts, articles and writings.
---

{%- from "components/components.njk" import component %}

<ul class="post--listing" role="list">
  {%- for posts in collections.posts -%}
    <li>{{ component('post', { url: posts.url, title: posts.data.title, date: posts.data.date | PostDate }) }}</li>
  {%- endfor -%}
</ul>