---
title: Getting Started
---

# Getting Started

## Requirements

| MC Version     | Recommended Java Version |
| -------------- | ------------------------ |
| 1.21+          | Java 21                  |

## Migrating to IceCream

### From Vanilla

Like Paper, migrating from Vanilla is easy.

IceCream will handle all conversions for you automatically. No additional consideration is required.

### From Craftbukkit, Spigot or Paper

IceCream is a drop in replacement for both CraftBukkit and Spigot or Paper, you don't need to make any changes.

## Downloading IceCream

IceCream provides runnable server jars directly from 
[GitHub Releases](https://github.com/IceCreamMC/IceCream/releases)
or
[The Website](https://icecreammc.xyz)

:::caution

After a new stable minecraft version is released, we will only keep the last build of the old version.

:::

## Running The Server

To run the server, simply start it up like any other Java application.

Open your terminal, navigate to the saved location, and then run
`java -Xms2G -Xmx2G -jar (jar-name).jar nogui`. Ensure you replace `(jar-name).jar` with the name of the jar
you have downloaded.

The amount of RAM can be set by changing the numbers in the `-Xms` and `-Xmx` arguments. `nogui`
disables Vanilla's GUI, so you don't get double interfaces when using the command line.

For more advanced Java tuning, see [Aikar's Flags](https://docs.papermc.io/paper/aikars-flags).

You also need to see the [Paper Global Configuration](https://docs.papermc.io/paper/reference/global-configuration) and
[Paper Per World Configuration](https://docs.papermc.io/paper/reference/world-configuration) pages to configure the paper config.

If you need a bat/sh script we suggust you use the [PaperMC Startup Script Generator](https://docs.papermc.io/misc/tools/start-script-gen).

## Updating The Server

:::tip

If you are using a shared host, your host may provide a built-in way to update. Consult their
documentation before continuing.

:::

Updating IceCream is simple.

1. Download a new JAR from [our Website](https://icecreammc.xyz/downloads.html).
2. Stop your server. It is NOT recommended and may cause issues to replace your IceCream JAR directly while the
   server is running.
3. Replace your old IceCream JAR file with the new one.
4. Start your server. Watch the startup log to ensure everything goes to plan. If there are any
   plugin conflicts or issues, you will see them there.