// FooterSectionLinkPanelLink.js
'use strict';
import React from 'react';

class FooterSectionLinkPanelLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        const linkPropsWithoutChildren = Object.assign({}, props, {children: null});
        let linkChildren = props.children;
        if(!linkChildren.length) { linkChildren = [ linkChildren ]; }
        const linkIcon = linkChildren.filter(linkChild => linkChild.props['data-icon'])[0];
        const linkTitle = linkChildren.filter(linkChild => linkChild.props['data-title'])[0];
        const linkDescription = linkChildren.filter(linkChild => linkChild.props['data-description'])[0];
        return <div className='footer-section-link-panel-link' >
            <a className='footer-section-link-panel-link-anchor' {...linkPropsWithoutChildren} >
                {!!linkIcon && <div className='footer-section-link-panel-link-icon'>{linkIcon}</div>}
                <div className='footer-section-link-panel-link-texts'>
                    <div className='footer-section-link-panel-link-title'>{linkTitle}</div>
                    <div className='footer-section-link-panel-link-description'>{linkDescription}</div>
                </div>
            </a>
        </div>;
    }
}

export default FooterSectionLinkPanelLink;
