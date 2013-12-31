# Spacegray

## About

Spacegray is a set of custom UI themes for Sublime Text 2/3. It's all about hype and minimal.

***

## How to Install

### Via Package Control

The easiest way to install is using [Sublime Package Control](https://sublime.wbond.net), where Spacegray is listed as `Theme - Spacegray`.

1. Open Command Palette using menu item `Tools -> Command Palette...` (⇧+⌘+P on Mac)
2. Choose `Package Control: Install Package`
3. Find `Theme - Spacegray` and hit Enter

### Manual

You can also install the theme manually:

1. [Download the .zip](https://github.com/kkga/spacegray/archive/master.zip)
2. Unzip and rename the folder to `Theme - Spacegray`
3. Copy the folder into `Packages` directory, which you can find using the menu item `Sublime Text -> Preferences -> Browse Packages...`

***

## How to Activate

Activate the UI theme and color scheme by modifying your user preferences file, which you can find using the menu item `Sublime Text -> Preferences -> Settings - User` (⌘+, on Mac).

Spacegray comes in different flavors, based on [Base16](https://github.com/chriskempson/base16) color schemes.

You can choose whichever flavor you like, but don't forget to change *both* color scheme and UI theme so they match.

***Note: Don't forget to restart Sublime Text after activating the theme.***

### Spacegray

Default flavor based on Base16 Ocean Dark color scheme.

![image](Screenshots/spacegray.png)

#### Example settings for Spacegray

```
{
  "theme": "Spacegray.sublime-theme",
  "color_scheme": "Packages/Theme - Spacegray/base16-ocean.dark.tmTheme"
}
```

### Spacegray Light

Light variation based on Base16 Ocean Light color scheme.

![image](Screenshots/spacegray-light.png)

#### Example settings for Spacegray Light

```
{
  "theme": "Spacegray Light.sublime-theme",
  "color_scheme": "Packages/Theme - Spacegray/base16-ocean.light.tmTheme"
}
```

### Spacegray Eighties

A variation based on Base16 Eighties Dark color scheme.

![image](Screenshots/spacegray-eighties.png)

#### Example settings for Spacegray Eighties

```
{
  "theme": "Spacegray Eighties.sublime-theme",
  "color_scheme": "Packages/Theme - Spacegray/base16-eighties.dark.tmTheme"
}
```

***

## Thanks

The Spacegray Eighties variation is contributed by [Yoshua Wuyts](https://github.com/yoshuawuyts).
