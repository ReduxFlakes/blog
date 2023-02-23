---
title: Android apps that I use
permalink: "/pages/favorite-android-apps"
order: 1
---

{%- from "components/components.njk" import component -%}

## {{title}}

Sometimes I get people saying that they want to start their privacy journey, and there's always that question: "What apps do you use from a privacy standpoint?" or "What are some good open source apps that you use?" So that's why I created this page—to answer those questions.

First of all, this list only includes apps that I use on a daily basis and that are for Android, which means some of these apps may not exist on iOS, and since I get most of my apps trough [F-Droid](https://f-droid.org/en/), some of them don't exist on the Play Store.

{{ component('notice_box', {type: "info", message: "All of these apps are compatible with a phone that has been de-googled."})}}


## Aegis

{{ component('img_pos', { src: "https://cdn.statically.io/gh/ReduxFlakes/assets/main/personal-blog/pages/apps/aegis.png", position: "left", extras: "shadow"} ) }}

Aegis is a 2FA authentication app for Android, and it's probably one of the best out there! It's user-friendly while still having all the features you expect from an authenticator app, like biometric unlock, a dark theme, backup and restore, and even the option to add icon packs.

[F-Droid App Listing](https://f-droid.org/packages/com.beemdevelopment.aegis/)

## K9-Mail

{{ component('img_pos', { src: "https://cdn.statically.io/gh/ReduxFlakes/assets/main/personal-blog/pages/apps/k9-mail.png", position: "left", extras: "shadow"} ) }}

K9-Mail is a mail client for Android that supports a lot of protocols; even GMail accounts work with it, making it a very good alternative to the GMail Android client. It's also feature-rich and comes with a lot of customization. In recent times, Mozilla actually bought it to be the base of Thunderbird for Android, which some people might like or hate.

[F-Droid App Listing](https://f-droid.org/packages/com.fsck.k9/)

## Bitwarden

{{ component('img_pos', { src: "https://cdn.statically.io/gh/ReduxFlakes/assets/main/personal-blog/pages/apps/bitwarden.jpg", position: "left", extras: "shadow"} ) }}

Bitwarden is a cloud-based password manager. This entry is more related to the service than the app itself.

The main thing I like about Bitwarden is that they have a generous free tier, their are open source, they respect your privacy and it can be used almost everywhere!

[Bitwarden F-Droid Repo](https://mobileapp.bitwarden.com/fdroid/)

# OpenBoard

{{ component('img_pos', { src: "https://cdn.statically.io/gh/ReduxFlakes/assets/main/personal-blog/pages/apps/openboard.png", position: "left", extras: "shadow"} ) }}

I never enjoyed using the default AOSP keyboard, and unfortunately there aren't a lot of great FOSS keyboards for Android, especially ones similar to GBoard, which is kind of nice. I've tried FlorisBoard, but it doesn't have grammar correction... yet. But OpenBoard is the best I could find that meets my requirements: it has multi-language support, a dark theme, grammar correction, and it's FOSS.

[F-Droid App Listing](https://f-droid.org/en/packages/org.dslul.openboard.inputmethod.latin/)