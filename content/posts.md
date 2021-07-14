---
title: Posty
menu:
    main:
        weight: 10
url: /posts
---

{% for event in site.posts %}
  <li>
    <a href="{{ event.url }}">
      {{ event.title }} [{{ event.date | date: "%Y" }}]
    </a>
  </li>
{% endfor %}