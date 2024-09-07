---
title: Migration
description: Switch your Server software to switch to IceCream
---


**⚠️ WARNING** Please backup your data before switching to IceCreamMC! It is not our responsibility if you lose your data. If you encounter any issues, you can join our Discord for help!

### Migrating to IceCream from Paper/Spigot/Purpur/Etc

It's easy to migrate from CraftBukkit, Spigot or Paper to IceCream. Follow the steps below.

1. Stop your server and create a full backup.
2. Download IceCream from [GitHub Releases](https://www.github.com/IceCreamMC/IceCream/releases/latest) or our Website.
3. Replace your existing server jar with your freshly downloaded IceCream jar
4. Edit your start.bat/sh (if you have), replace your old jar name to IceCream jar name (such as icecream-paperclip-1.20.4-R0.1-SNAPSHOT-reobf.jar).
5. Start and enjoy your new IceCream server!

IceCream retains full compatibility with all Paper/Spigot plugins, allowing a seamless transition.

Your new IceCream server will still use `bukkit.yml`, `spigot.yml`, `config/paper-global.yml, purpur.yml, pufferfish.yml` and paper world configuration, only adding new configuration options in `icecream.yml`.

### Migrating to IceCream from Vanilla

When migrating to IceCream from Vanilla, the way worlds are stored will automatically be changed. Whenever you want to go back to Vanilla, follow the Vanilla Migration Guide closely, as manual changes will be required.

1. Stop your server and create a full backup.
2. Download IceCream from [GitHub Releases](https://www.github.com/IceCreamMC/IceCream/releases/latest) or our Website.
3. Replace your existing server jar with your freshly downloaded IceCream jar
4. Edit your start.bat/sh (if you have), replace your old jar name to IceCream jar name (such as icecream-1.21.jar).
5. Start and enjoy your new IceCream server!

Fun Fact: PaperMC, Purpur, Spigot, Bukkit and other forks based on them use the same world folder formats!

Since Vanilla manages their worlds differently you will have to make some changes to not make IceCream make a new world.

| Server Software                             | Overworld                                                                                                                   | Nether                                                                                                                                   | End                                                                                                                                      |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Vanilla/Forge/Fabric/Quilt                  | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><br><code>/world</code></td></tr></tbody></table> | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><br><code>/world/DIM-1</code></td></tr></tbody></table>        | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><br><code>/world/DIM1</code></td></tr></tbody></table>         |
|                                             |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
| <p><br><code>/world</code></p>              |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
|                                             |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
| <p><br><code>/world/DIM-1</code></p>        |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
|                                             |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
| <p><br><code>/world/DIM1</code></p>         |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
| IceCream                                    | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><br><code>/world</code></td></tr></tbody></table> | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><br><code>/world_nether/DIM-1</code></td></tr></tbody></table> | <table data-header-hidden><thead><tr><th></th></tr></thead><tbody><tr><td><br><code>/world_the_end/DIM1</code></td></tr></tbody></table> |
|                                             |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
| <p><br><code>/world</code></p>              |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
|                                             |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
| <p><br><code>/world_nether/DIM-1</code></p> |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
|                                             |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |
| <p><br><code>/world_the_end/DIM1</code></p> |                                                                                                                             |                                                                                                                                          |                                                                                                                                          |

### Migrating to IceCream From Forge, Quilt, Etc

Because both Fabric and Forge use the same directory structure for world storage as Vanilla, follow the [Vanilla Migration Guide](migrating.md#migrating-to-icecream-from-vanilla) for this process. Note that neither Fabric nor Forge will support IceCream plugins! You will be required to find replacement mods.

If You Had Mods That Add Custom Blocks,Entities or Items you will have to reset your world.

### From a fork with Linear Region Format

Since We Dont Got Any Kind of Converter from linear to anvil you will need to reset your world but the installation process is the same as [#migrating-to-icecream-from-paper-spigot-purpur-etc](migrating.md#migrating-to-icecream-from-paper-spigot-purpur-etc "mention")