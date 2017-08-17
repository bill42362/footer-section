// index.js
'use strict';
import React from 'react';
import FooterSectionLinkPanelLink from './FooterSectionLinkPanelLink.js';

class FooterSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shouldGoTabletMode: false, shouldGoMobileMode: false};
    }
    componentDidMount() {
        const { maxRwdMode } = this.props;
        const baseWidth = this.refs.base.getBoundingClientRect().width;
        const shouldGoTabletMode = (575 < baseWidth && 960 >= baseWidth)
            || (960 < baseWidth && 'tablet' === maxRwdMode);
        const shouldGoMobileMode = 575 >= baseWidth || (575 < baseWidth && 'mobile' === maxRwdMode);
        this.setState({ shouldGoTabletMode, shouldGoMobileMode });
    }
    render() {
        const { shouldGoTabletMode, shouldGoMobileMode } = this.state;
        const { desktopOnlyPanelKeys, mobilePanelKeys } = this.props;
        let { children } = this.props;
        if(!children.length) { children = [children]; }
        children = children
            .reduce((current, child) => {
                if(!child.length) { return [...current, child]; }
                else { return [...current, ...child]; }
            }, [])
            .filter(child => child);
        const tabletModeClassName = shouldGoTabletMode ? ' tablet' : '';
        const mobileModeClassName = shouldGoMobileMode ? ' mobile' : '';
        const logos = children.filter(child => child.props['data-logo']);
        const copyright = children.filter(child => child.props['data-copyright'])[0];
        const apps = children.filter(child => child.props['data-app']);
        const linkPanels = children.reduce((current, child) => {
            let result = current;
            if(child.props['data-links_panel']) {
                const panelChildren = current.filter(panelChildren => {
                    return child.props['data-panel_key'] === panelChildren[0].props['data-panel_key'];
                })[0];
                if(!panelChildren) {
                    result = [...result, [ child ]];
                } else {
                    panelChildren.push(child);
                }
            }
            return result;
        }, []);
        return <div className={`footer-section${tabletModeClassName}${mobileModeClassName}`} ref='base'>
            <div className='footer-section-main-panel'>
                <div className='footer-section-main-panel-logos'>
                    {logos.map((logo, index) => {
                        return <div className='footer-section-main-panel-logo' key={index}>{logo}</div>;
                    })}
                </div>
                <div className='footer-section-main-panel-copyright'>{copyright}</div>
                <div className='footer-section-main-panel-apps'>
                    {apps.map((app, index) => {
                        return <div className='footer-section-main-panel-app' key={index}>{app}</div>;
                    })}
                </div>
            </div>
            {linkPanels.map((linkPanelChildren, index) => {
                const panelKey = linkPanelChildren[0].props['data-panel_key'];
                const desktopOnlyClassName = -1 !== desktopOnlyPanelKeys.indexOf(panelKey) ? ' desktop' : '';
                const mobileClassName = -1 !== mobilePanelKeys.indexOf(panelKey) ? ' mobile' : '';
                const panelHeader = linkPanelChildren.filter(linkPanelChild => linkPanelChild.props['data-panel_header'])[0];
                const panelLinks = linkPanelChildren.filter(linkPanelChild => !linkPanelChild.props['data-panel_header']);
                let panelTitle = undefined;
                let panelDescription = undefined;
                if(panelHeader) {
                    let headerChildren = panelHeader.props.children;
                    if(!headerChildren.length) { headerChildren = [ headerChildren ];}
                    panelTitle = headerChildren.filter(headerChild => headerChild.props['data-title'])[0];
                    panelDescription = headerChildren.filter(headerChild => headerChild.props['data-description'])[0];
                }
                return <div className={`footer-section-link-panel${desktopOnlyClassName}${mobileClassName}`} key={index}>
                    {!!panelHeader && <div className='footer-section-link-panel-header'>
                        {!!panelTitle && <div className='footer-section-link-panel-header-title'>{panelTitle}</div>}
                        {!!panelDescription && <div className='footer-section-link-panel-header-description'>{panelDescription}</div>}
                    </div>}
                    <div className='footer-section-link-panel-links'>
                        {panelLinks.map((panelLink, index) => {
                            return <FooterSectionLinkPanelLink key={index} {...panelLink.props} />;
                        })}
                    </div>
                </div>;
            })}
            <div className='footer-section-mobile-main-panel'>
                <div className='footer-section-mobile-main-panel-logos'>
                    {logos.map((logo, index) => {
                        return <div className='footer-section-mobile-main-panel-logo' key={index}>{logo}</div>;
                    })}
                </div>
                <div className='footer-section-mobile-main-panel-copyright'>{copyright}</div>
            </div>
        </div>;
    }
}

export default FooterSection;
