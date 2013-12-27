# Spacegray

### About

Spacegray is a set of custom UI themes for Sublime Text 2/3. It's all about hype and minimal.

***

### Install

#### Via Package Control

The easiest way to install is using [Sublime Package Control](https://sublime.wbond.net), where Spacegray is listed as `Theme - Spacegray`.

1. Open Command Palette using menu item `Tools -> Command Palette...` (⇧⌘P or Shift+Ctrl+P)
2. Choose `Package Control: Install Package`
3. Find `Theme - Spacegray` and hit Enter

#### Manual

You can also install the theme manually:

1. [Download the .zip](https://github.com/kkga/spacegray/archive/master.zip)
2. Unzip and rename the folder to `Theme - Spacegray`
3. Copy the folder into `Packages` directory, which you can find using the menu item `Sublime Text -> Preferences -> Browse Packages...`

***

### Activate

Activate the UI theme and color scheme by modifying your user preferences file, which you can find using the menu item `Sublime Text -> Preferences -> Settings - User` (⌘, on Mac).

Spacegray comes in two flavors: one based on Base 16 Ocean Dark color scheme, and another one based on Tomorrow Night color scheme, generously contributed by [Chris Kempson](http://chriskempson.github.io/base16/#ocean).

You can choose whichever flavor you like, but don't forget to change *both* color scheme and UI theme so they match.

#### Spacegray

This is the default Spacegray flavor based on Base16 Ocean Dark color scheme.

![image](Screenshots/spacegray.png)

##### Example settings

```
{
  "theme": "Spacegray.sublime-theme",
  "color_scheme": "Packages/Theme - Spacegray/Color Schemes/base16-ocean.dark.tmTheme"
}
```

#### Spacegray Tomorrow

This is a variation based on Tomorrow Night color scheme.

![image](Screenshots/spacegray-tomorrow.png)

##### Example settings

```
{
  "theme": "Spacegray Tomorrow.sublime-theme",
  "color_scheme": "Packages/Theme - Spacegray/Color Schemes/Tomorrow-Night-Eighties.tmTheme"
}
```

***

### Contribution

If you're willing to contribute and make a variation of Spacegray for *Solarized* or *Monokai* color schemes, it would be awesome.

***

### Thanks

The Spacegray Tomorrow variation is contributed by [Yoshua Wuyts](https://github.com/yoshuawuyts).