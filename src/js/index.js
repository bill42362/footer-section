// index.js
'use strict';
import React from 'react';

class FooterSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shouldGoTabletMode: false, shouldGoMobileMode: false};
    }
    componentDidMount() {
        const baseRect = this.refs.base.getBoundingClientRect();
        const shouldGoTabletMode = 575 < baseRect.width && 960 >= baseRect.width;
        const shouldGoMobileMode = 575 >= baseRect.width;
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
                        <div className='footer-section-link-panel-link'>
                            {panelLinks.map((panelLink, index) => {
                                const linkPropsWithoutChildren = Object.assign({}, panelLink.props, {children: null});
                                let linkChildren = panelLink.props.children;
                                if(!linkChildren.length) { linkChildren = [ linkChildren ]; }
                                const linkIcon = linkChildren.filter(linkChild => linkChild.props['data-icon'])[0];
                                const linkTitle = linkChildren.filter(linkChild => linkChild.props['data-title'])[0];
                                const linkDescription = linkChildren.filter(linkChild => linkChild.props['data-description'])[0];
                                return <a
                                    className='footer-section-link-panel-link-anchor' key={index}
                                    {...linkPropsWithoutChildren}
                                >
                                    {!!linkIcon && <div className='footer-section-link-panel-link-icon'>{linkIcon}</div>}
                                    <div className='footer-section-link-panel-link-texts'>
                                        <div className='footer-section-link-panel-link-title'>{linkTitle}</div>
                                        <div className='footer-section-link-panel-link-description'>{linkDescription}</div>
                                    </div>
                                </a>;
                            })}
                        </div>
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
