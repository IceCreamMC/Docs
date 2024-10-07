---
title: Migrating
---

# Migrating to / from IceCream

It's simple to migrate your server to / from IceCream. The steps below will help
you get started.

:::caution Backup your data before you start!

Before you begin, please ensure you have a full backup of your server.

:::

:::tip

If you encounter any issues, do not hesitate to reach out for support on 
[our Discord server](https://discord.gg/icmc) (`#support` channel).

:::

## Migrating to IceCream

### From CraftBukkit, Spigot or Paper

It's easy to migrate from CraftBukkit, Spigot or Paper to IceCream. Follow 
the steps below.

1. Stop your server and create a full backup.
2. Download IceCream from [our website](https://icecreammc.xyz/downloads.html).
3. Replace your existing server jar with your freshly downloaded IceCream jar.
4. Edit your strat.bat/sh (if you have), replace your old jar name to IceCream
 jar name (such as (jar-name).jar).
5. Start your new server.

IceCream retains full compatibility with all Paper/Spigot plugins, allowing a seamless transition.

:::info

Your new IceCream server will still use `bukkit.yml`, `spigot.yml`, `config/paper-global.yml`, paper world configuration, `pufferfish.yml` and `purpur.yml `only adding new configuration options in `icecream.yml`.

:::

### From Vanilla

When migrating to IceCream from Vanilla, the way worlds are stored will automatically be changed.
Whenever you want to go back to Vanilla, follow the [Vanilla Migration Guide](#to-vanilla)
closely, as manual changes will be required.

1. Stop your Vanilla server and create a full backup.
2. Download IceCream from [our website](https://icecreammc.xyz/downloads.html).
3. Replace your existing Vanilla server jar with your freshly downloaded IceCream jar.
4. Edit your strat.bat/sh (if you have), replace your Vanilla jar name to IceCream
 jar name (such as (jar-name).jar).
5. Start your new server.

### From Fabric/Forge

Because both Fabric and Forge use the Vanilla world directory structure, the same steps as the
[Vanilla Migration Guide](#from-vanilla) may be used, with one caveat. If your Fabric or Forge
server used mods that added new blocks, items, or other data to the game, IceCream will be unable to
load these features.

Additionally, note that IceCream does not support Fabric or Forge mods. You will need to find plugin
replacements. Any hybrids that attempt to support both mods and plugins are fundamentally flawed and
not recommended for use.

:::info

If you must use a hybrid that support both mods and plugins, we have some suggestions.
And We are not responsible for any loss caused by using such server!

- 1.12.2 [SpongeForge](https://github.com/SpongePowered/SpongeForge)
- 1.20.x/1.19.x/1.18.x/1.16.x [Arclight](https://github.com/IzzelAliz/Arclight)

:::

## Migrating From IceCream

### To Vanilla

Because IceCream stores worlds slightly differently than Vanilla, manual work is required to migrate.
If these steps are not taken, your nether and end will look like they have been reset. Don't worry!
Even if this has happened, you haven't lost any data. The Vanilla server just doesn't know where to
find it.

Here is a chart to show the difference between how Vanilla and IceCream store worlds.

:::info

In fact, all Bukkit-based servers use this world format (such as Paper or Purpur)

:::

| Server Software | Overworld | Nether                | End                   |
| --------------- | --------- | --------------------- | --------------------- |
| Vanilla         | `/world`  | `/world/DIM-1`        | `/world/DIM1`         |
| IceCream        | `/world`  | `/world_nether/DIM-1` | `/world_the_end/DIM1` |

Follow these steps to migrate from IceCream to Vanilla:

:::note

These steps assume a `level-name` (as set in `server.properties`) of `world`. If this is not the
case for you, replace `world` with your `level-name` for all steps below.

:::

1. Stop your IceCream server.
2. If you have already started your server with Vanilla, enter the `world` folder and delete both
   the `DIM-1` and `DIM1` folders. This step is only necessary should you have started your server
   with Vanilla.
3. Copy the `/world_nether/DIM-1` folder into the `/world` folder.
4. Copy the `/world_the_end/DIM1` folder into the `/world` folder.
5. Delete both the `/world_nether` and `/world_the_end` folders.
6. Replace your IceCream jar with a Vanilla server jar.
7. Start your Vanilla server.

### To CraftBukkit, Spigot or Paper

IceCream does **NOT** support migration to either CraftBukkit or Spigot! And it may be safe to migrate
to Paper, but we are not sure. While you may find success (both CraftBukkit, Spigot and Paper use the 
same directory structure as IceCream), **do not** reach out for support with issues you encounter and
note that data loss is possible.

### To Fabric/Forge

Because both Fabric and Forge use the same directory structure for world storage as Vanilla, follow
the [Vanilla Migration Guide](#to-vanilla) for this process. Note that neither Fabric nor Forge will
support IceCream plugins! You will be required to find replacement mods.