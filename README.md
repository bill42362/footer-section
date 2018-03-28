# footer-section
Basic footer section with RWD.

## props ##
* There are three modes for RWD: `desktop`, `tablet` and `mobile`.
* `desktopOnlyPanelKeys`: define which panels will only display on `desktop` mode.
* `mobilePanelKeys`: define which panels will be allowed on `mobile` mode.
* `maxRwdMode`: define the largest mode package will use, ex: set to `tablet` will disable `desktop` mode.

## children ##
There are two kinds of panel avaliable: `main` panel and `links` panel.
### main panel ###
* Main panel will be displayed on every RWD modes.
* Pass `data-main_panel={true}` prop to put child component in main panel.
* Pass `data-(logo|app|copyright)={true}` prop can display child as (logo|app|copyright) layout.
```html
<!-- logo child -->
<a data-main_panel={true} data-logo={true} href='http://tw.pbplus.me'>
  <img data-image={true} src='https://tv.pbplus.me/img/logo.svg' title='Logo' />
  <span data-title={true}>運動讓生活更有趣</span>
</a>

<!-- app child -->
<a data-main_panel={true} data-app={true}>
  <img data-icon={true} src='https://tv.pbplus.me/img/icon/apple-touch-icon-114x114.png' title='App Logo' />
  <span data-title={true}>pb+TV App立即下載</span>
</a>

<!-- copyright child -->
<div data-main_panel={true} data-copyright={true}>
  <div>© 2016-2017 pbplus.</div>
  <div>All Right Reserved</div>
</div>

```
### links panel ###
* Pass `data-links_panel={true}` prop to put child component in links panel.
* Pass `data-panel_key={KEY}` prop to put child components with same `KEY` in a links panel.
* Children with `data-panel_header={true}` prop will be the header of the links panel.
```html
<!-- header child of panel {0} -->
<div data-links_panel={true} data-panel_key={0} data-panel_header={true}>
  <span data-title={true}>Services</span>
  <span data-description={true}>平台服務</span>
</div>

<!-- child of panel {0} which will be skyblue on mouse hover -->
<a data-links_panel={true} data-panel_key={0} data-color='skyblue' href='http://facebook.com'>
  <span data-title={true}>TV直播</span>
  <span data-description={true}>運動賽事、pb+自製節目及更多活動精彩直播</span>
</a>

<!-- child of panel {2} with icon -->
<a data-links_panel={true} data-panel_key={1}>
  <img data-icon={true} src='https://tv.pbplus.me/img/icon_fb_share.svg' title='pb+運動平台 官方粉絲團' />
  <span data-title={true}>pb+運動平台 官方粉絲團</span>
</a>
```

## Start demo server ##
```sh
cd tmp/
npm install
npm start # will listen on http://localhost:300
```
