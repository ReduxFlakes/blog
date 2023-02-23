---
title: Improving Lineage OS
excerpt: My setup for making Lineage OS better for daily use
date: 2023-02-13
cover: "https://lineageos.org/assets/img/security.png"
---

{%- from "components/components.njk" import component -%}

{{ component('notice_box', {type: "info", message: "This guide is still in the works, but it's available to the public for people who are interested in it or who want to improve it."})}}

So if you didn't know, I use Lineage OS on my main device simply because of how lightweight, smooth, and private it is. Obviously, it's not as private as GrapheneOS or Calyx OS, but yeah, if you don't have a Pixel phone, Lineage OS is your best bet.

But we are talking about Android and not iOS, so we can do whatever we want, and that's where this guide enters. I will be showing all the steps I took to make Lineage OS more enjoyable and easier for daily use, so let's get messy!

{{ component('notice_box', {type: "info", message: "All of these steps were made on Lineage OS 19 microG on the Xiaomi 11 Lite 5G NE."})}}

## Disable ADB

By default, Lineage OS comes with ADB and ADB Root turned on by default, which can be helpful to easily connect your phone into your computer, but it's also risky since there can be exploits into ADB itself, and having both turned on just makes the process of accessing the device more easy.

To turn off ADB, simply go to `Settings` and scroll down until `About phone`, click **seven times** on `Build number`, then go back and go to `About phone` again and find `Developer options`. Inside, find the section called `Debugging` and disable `USB debugging` and `Rooted debugging`.

{{ component('img_pos', { src: "https://cdn.statically.io/gh/ReduxFlakes/assets/main/personal-blog/guides/better-lineage/adb_dev_options.png", position: "center", label: "Debugging in Developer options"} ) }}

## Connectivity settings

For some reason, NFC and other network-related settings are enabled by default in Android; some of them simply drain the battery, while others can expose you to security risks. Disabling these settings is easy, so let's get started.

{{ component('img_pos', { src: "https://cdn.statically.io/gh/ReduxFlakes/assets/main/personal-blog/guides/better-lineage/connection_preferences.png", position: "center", label: "Connection preferences in Connected devices"} ) }}


### NFC

Go into `Settings`and `Connected devices`,  then go into `Connection preferences` and then `NFC`. Disable the option `Use NFC`.

### Printing

Android comes with a universal printing service so you can connect your printer easily, but for some reason, it is turned on by default.

Go to `Connection preferences` from the NFC step and go to `Printing`. On the section `Print services` there's a list of all the printing services installed on your device, all devices come with the **Default Print Service**; click on it, and at the top, disable the `Use print service` option.

### Bluetooth

Despite its age, Bluetooth can be very useful for sending files without internet to a nearby device, but it consumes a lot of battery power. 

To disable it, you can either go to QS Tiles and disable it or go into `Connection preferences` again, click on `Bluetooth` and disable `Use Bluetooth`.

## Network and Internet

Different from connectivity, which is related to connecting ecosystems, this section will touch on the internet side of things.

{{ component('img_pos', { src: "https://cdn.statically.io/gh/ReduxFlakes/assets/main/personal-blog/guides/better-lineage/network_internet.png", position: "center", label: "Network and Internet"} ) }}

### Notify for public networks

This is a feature of Android that notifies the user if a public network is available. Although it seems helpful, it drains battery since it needs to scan in the background for public Wi-Fi. Not only that, public networks are unsafe since anyone can join them and easily hack them.

Learn more about the risks of public networks in this article, "[Is Public WiFi safe to use?](https://protonvpn.com/blog/public-wifi-safety/)" by ProtonVPN.

To disable, simply go to `Settings`, `Network and Internet` and then `Internet`. Scroll down until `Network Preferences` and disable `Notify for public networks`.

### Changing DNS

This is one of the most important options in this guide. To put it simply, DNS is like a phone book for the internet. When you type a website url into your browser, DNS translates that url into an IP address, which is unique identifier for that website server. Know more about DNS on the [DNS Overview](https://www.privacyguides.org/advanced/dns-overview/) page in Privacy Guides.

Before changing this setting, you'll need to choose a **DNS Resolver**; fortunately, Privacy Guides have a handy page called [DNS Resolvers](https://www.privacyguides.org/dns/) where you can choose the best resolver for your needs.

To change the DNS, simply go into Network and Internet and click on `Private DNS`. Here you will change the default option (normally `Automatic`) to `Private DNS provider hostname` and then insert your DNS provider of choice.

## Location 

Coming soon!



