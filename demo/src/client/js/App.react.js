// App.react.js
import React from 'react';
// import FooterSection from 'footer-section';
import FooterSection from '../../../../src/js/index.js';
import '../css/app.less';
import '../../../../src/css/index.less';

class App extends React.Component {
    constructor(props) { super(props); }
    render() {
        return <div className='app'>
            <div className='content'></div>
            <div className='footer'>
                <FooterSection desktopOnlyPanelKeys={[0]}>
                    <a data-main_panel={true} data-logo={true} href='http://tw.pbplus.me'>
                        <img data-image={true} src='https://tv.pbplus.me/img/logo.svg' title='Logo' />
                        <span data-title={true}>運動讓生活更有趣</span>
                    </a>
                    <a data-main_panel={true} data-logo={true} href='http://tw.pbplus.me'>
                        <img data-image={true} src='https://tv.pbplus.me/img/logo.svg' title='Logo' />
                        <span data-title={true}>運動讓生活更有趣</span>
                    </a>
                    <a data-main_panel={true} data-logo={true} href='http://tw.pbplus.me'>
                        <img data-image={true} src='https://tv.pbplus.me/img/logo.svg' title='Logo' />
                        <span data-title={true}>運動讓生活更有趣</span>
                    </a>
                    <div data-main_panel={true} data-copyright={true}>
                        <div>© 2016-2017 pbplus.</div>
                        <div>All Right Reserved</div>
                    </div>
                    <a data-main_panel={true} data-app={true}>
                        <img data-icon={true} src='https://tv.pbplus.me/img/icon/apple-touch-icon-114x114.png' title='App Logo' />
                        <span data-title={true}>pb+TV App立即下載</span>
                    </a>
                    <a data-main_panel={true} data-app={true}>
                        <img data-icon={true} src='https://tv.pbplus.me/img/icon/apple-touch-icon-114x114.png' title='App Logo' />
                        <span data-title={true}>pb+TV App立即下載</span>
                    </a>
                    <div data-links_panel={true} data-panel_key={0} data-panel_header={true}>
                        <span data-title={true}>Services</span>
                        <span data-description={true}>平台服務</span>
                    </div>
                    <a data-links_panel={true} data-panel_key={0} data-color='skyblue' href='http://facebook.com'>
                        <span data-title={true}>TV直播</span>
                        <span data-description={true}>運動賽事、pb+自製節目及更多活動精彩直播</span>
                    </a>
                    <a data-links_panel={true} data-panel_key={0}>
                        <span data-title={true}>購票</span>
                        <span data-description={true}>專屬運動迷的購票服務</span>
                    </a>
                    <div data-links_panel={true} data-panel_key={1} data-panel_header={true}>
                        <span data-title={true}>Follow Us</span>
                        <span data-description={true}>關注我們</span>
                    </div>
                    <a data-links_panel={true} data-panel_key={1}>
                        <img data-icon={true} src='https://tv.pbplus.me/img/icon_fb_share.svg' title='pb+運動平台 官方粉絲團' />
                        <span data-title={true}>pb+運動平台 官方粉絲團</span>
                    </a>
                    <a data-links_panel={true} data-panel_key={1}>
                        <img data-icon={true} src='https://tv.pbplus.me/img/icon_fb_share.svg' title='揪in 官方粉絲團' />
                        <span data-title={true}>揪in 官方粉絲團</span>
                    </a>
                    <a data-links_panel={true} data-panel_key={2}>
                        <span data-title={true}>隱私權政策</span>
                    </a>
                </FooterSection>
            </div>
        </div>;
    }
}

export default App;
