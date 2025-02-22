<h1 align="center">moodify</h1>
<p align="center" style="font-size:16px"><strong>Modifying HCMUS Moodle with bunch of awesome features!</strong></p>
<p align="center">  
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="400" />
</p>

<p align="center">
  <img alt="Stars" src="https://badgen.net/github/stars/yuran1811/moodify">
  <img alt="Forks" src="https://badgen.net/github/forks/yuran1811/moodify">
  <img alt="Issues" src="https://badgen.net/github/issues/yuran1811/moodify">
  <img alt="Commits" src="https://badgen.net/github/commits/yuran1811/moodify">
  <img alt="Code Size" src="https://img.shields.io/github/languages/code-size/yuran1811/moodify">
</p>

<div align="center"><a href="" target="_blank">Live Demo</a></div>

## Release

- [Release](https://github.com/yuran1811/moodify/releases)
- [CHANGELOG](/md/CHANGELOG.md)
- [TODO](/md/TODO.md)

## Features

- [x] Light (~213kb), fast and reliable
- [x] Auto signin to Moodle, Portal sites (if use the same account info)
- [x] Course page improvements
  - `Course Plit View` feature
  - `Courses Quick Browse` feature
  - Pages restyling
- [x] Watching moodle events on Facebook

- **Upcoming Features**
  - Watching moodle events on any provided sites.
- **Supported sites**
  - https://courses.hcmus.edu.vn
  - https://portal.hcmus.edu.vn/SinhVien.aspx?pid=211
  - https://courses.ctda.hcmus.edu.vn
  - https://portal.ctdb.hcmus.edu.vn
  - https://portal.ctdb.hcmus.edu.vn/sinh-vien/ket-qua-dkhp
  - https://hcmus.shub.edu.vn

## Screenshots

### Auto Sign In

#### Popup

| Popup Image 1                                        | Popup Image 2                                        |
| ---------------------------------------------------- | ---------------------------------------------------- |
| ![popup image 1](public/screenshots/extension-1.png) | ![popup image 2](public/screenshots/extension-2.png) |

#### Extension Active Status

![login-set](public/screenshots/auto-login.png)
![not-set](public/screenshots/not-enable-auto-login.png)

### Moodle Page Modifications

|                    | After                                               | Before                                                        |
| ------------------ | --------------------------------------------------- | ------------------------------------------------------------- |
| Navigation Bar     | ![After](public/screenshots/nav-bar.png)            | ![Before](public/screenshots/original/nav-bar.png)            |
| Home Page          | ![After](public/screenshots/home-page.png)          | ![Before](public/screenshots/original/home-page.png)          |
| Courses Page       | ![After](public/screenshots/my-courses-page.png)    | ![Before](public/screenshots/original/my-courses-page.png)    |
| Course Detail Page | ![After](public/screenshots/course-detail-page.png) | ![Before](public/screenshots/original/course-detail-page.png) |

### Facebook Integration

- To load events data from Moodle, ensure that you have logged in at [here](https://courses.ctda.hcmus.edu.vn).

> **Info**: Visit the Moodle site frequently to update new events.

> **Note**: The extension will not work if you are not logged in to the Moodle site. The extension will automatically log in to the Moodle site if you have enabled the `Auto Sign In` feature.If you have not enabled the `Auto Sign In` feature, you need to log in to the Moodle site manually to use this feature.

| Empty                                                     | Not Empty                                               |
| --------------------------------------------------------- | ------------------------------------------------------- |
| ![Empty](public/screenshots/facebook-integrate-empty.png) | ![Not Empty](public/screenshots/facebook-integrate.png) |

### GPA Calculator

#### Step 1: Enable `Portal GPA Calculate` feature in extension popup

![GPACalcStep1](public/screenshots/GPACalc/GPACalcStep1.png)

#### Step 2: Drag and drop the `GPA Calculator` to the bookmark bar

![GPACalcStep2_1](public/screenshots/GPACalc/gpacalc.png)

![GPACalcStep2_2](public/screenshots/GPACalc/GPACalcStep2.png)

#### Step 3: Click the `GPA Calculator` bookmarklet

![GPACalcStep3](public/screenshots/GPACalc/GPACalcStep3.png)

### Export Timetable

- Do the same step as `GPA Calculator` but with `Export Timetable` feature.

![Timetable Export](public/screenshots/timetable.png)

## Installation

- Download the latest release [zip](https://github.com/yuran1811/moodify/releases).
- Unzip the file to `/moodify` folder.
- Goto [`chrome://extensions/`](chrome://extensions/).
- Click `Load unpacked` and choose the `/moodify` folder or drag and drop the folder to `chrome://extensions/`.
- Extension is available now!

## References

- Many thanks to this [inspired repo](https://github.com/tinwritescode/hcmus-moodle-improved) and [Noboroto's Fork](https://github.com/Noboroto/hcmus-moodle-improved), I've create this with a bunch of new features and improvements.
