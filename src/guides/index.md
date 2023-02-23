---
layout: page.njk
title: Guides
description: Helpful, easy to follow, guides, made by me.
---

{%- from "components/components.njk" import component %}

<ul class="cards" role="list">
  {%- for guide in collections.guides -%}
    <li>{{ component('card', { title: guide.data.title, date: guide.data.date | PostDate,content: guide.data.excerpt, url: guide.url, cover: guide.data.cover  }) }}</li>
  {%- endfor -%}
</ul>
