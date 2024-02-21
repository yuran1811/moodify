<h1 align="center" style="font-size: 32px">Moodify (Official)</h1>

<p align="center" style="font-size: 16px"><strong>Moodle site modifying and lots of awesome features are out of the box!</strong></p>

<p align="center">
  <img alt="Stars" src="https://badgen.net/github/stars/yuran1811/moodify">
  <img alt="Forks" src="https://badgen.net/github/forks/yuran1811/moodify">
  <img alt="Issues" src="https://badgen.net/github/issues/yuran1811/moodify">
  <img alt="Commits" src="https://badgen.net/github/commits/yuran1811/moodify">
</p>
<p align="center">
  <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
</p>

### Release

- [Release](https://github.com/yuran1811/moodify/releases)

### Features

- [x] Auto signin to Moodle, Portal sites (if use the same account info)
- [x] Course page improvements
- [x] Watching moodle events on Facebook

#### Upcoming Features

- Watching moodle events on any provided sites

### Todos

- [ ] Add last-access time for courses and reminds if over 12hrs + Moodle link
- [ ] Add `ignore` function for events + watch for the submit status
- [ ] Add submit link for tasks
- [ ] Add notification badge for moodle icon
- [ ] Add scrollbar for popup logs
- [ ] Add popup options for Moodle page restyle
- [ ] Add auto login time input

- [ ] Tabs layout for watch event (mark, unmark)
- [ ] Sort events due date in fb integration
- [ ] Right click to add watch events
- [ ] Extend the watch features for other sites

- [ ] Drop shadow for events popup

### Supported sites

- https://portal.ctdb.hcmus.edu.vn
- https://courses.ctda.hcmus.edu.vn
- https://courses.hcmus.edu.vn

### Screenshot

#### Auto Sign In

##### Popup

| Popup Image 1                                        | Popup Image 2                                        |
| ---------------------------------------------------- | ---------------------------------------------------- |
| ![popup image 1](public/screenshots/extension-1.png) | ![popup image 2](public/screenshots/extension-2.png) |

##### Extension Active Status

![login-set](public/screenshots/auto-login.png)
![not-set](public/screenshots/not-enable-auto-login.png)

#### Moodle Page Modifications

|                    | Before                                               | After                                                        |
| ------------------ | ---------------------------------------------------- | ------------------------------------------------------------ |
| Navigation Bar     | ![before](public/screenshots/nav-bar.png)            | ![after](public/screenshots/original/nav-bar.png)            |
| Home Page          | ![before](public/screenshots/home-page.png)          | ![after](public/screenshots/original/home-page.png)          |
| Courses Page       | ![before](public/screenshots/my-courses-page.png)    | ![after](public/screenshots/original/my-courses-page.png)    |
| Course Detail Page | ![before](public/screenshots/course-detail-page.png) | ![after](public/screenshots/original/course-detail-page.png) |

#### Facebook Integration

![facebook-integrate](public/screenshots/facebook-integrate.png)

---

### Installation

- Download the latest release [zip](https://github.com/yuran1811/moodify/releases).
- Unzip the file to `/moodify` folder.
- Goto [`chrome://extensions/`](chrome://extensions/).
- Click `Load unpacked` and choose the `/moodify` folder or drag and drop the folder to `chrome://extensions/`.
- Extension is available now!

### References

- Many thanks to this [inspired repo](https://github.com/tinwritescode/hcmus-moodle-improved) and [Noboroto's Fork](https://github.com/Noboroto/hcmus-moodle-improved), I've create this with a bunch of new features and improvements.
