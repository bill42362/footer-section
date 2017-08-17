// FooterSectionLinkPanelLink.js
'use strict';
import React from 'react';

class FooterSectionLinkPanelLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shouldEnableColor: false};
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    onMouseEnter(e) { this.setState({shouldEnableColor: true}); }
    onMouseLeave(e) { this.setState({shouldEnableColor: false}); }
    render() {
        const { shouldEnableColor } = this.state;
        const props = this.props;
        const linkPropsWithoutChildren = Object.assign({}, props, {children: null});
        let linkChildren = props.children;
        if(!linkChildren.length) { linkChildren = [ linkChildren ]; }
        const linkColor = props['data-color'];
        const linkIcon = linkChildren.filter(linkChild => linkChild.props['data-icon'])[0];
        const linkTitle = linkChildren.filter(linkChild => linkChild.props['data-title'])[0];
        const linkDescription = linkChildren.filter(linkChild => linkChild.props['data-description'])[0];
        return <div
            className='footer-section-link-panel-link'
            style={{color: shouldEnableColor ? linkColor : ''}}
            onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
            onFocus={this.onMouseEnter} onBlur={this.onMouseLeave}
        >
            <a className='footer-section-link-panel-link-anchor' {...linkPropsWithoutChildren} >
                {!!linkIcon && <div className='footer-section-link-panel-link-icon-wrapper' >
                    <div
                        className='footer-section-link-panel-link-icon'
                        style={{backgroundColor: shouldEnableColor ? linkColor : ''}}
                    >{linkIcon}</div>
                </div>}
                <div className='footer-section-link-panel-link-texts'>
                    <div className='footer-section-link-panel-link-title'>{linkTitle}</div>
                    <div
                        className='footer-section-link-panel-link-description'
                        style={{color: shouldEnableColor ? linkColor : ''}}
                    >{linkDescription}</div>
                </div>
            </a>
        </div>;
    }
}

export default FooterSectionLinkPanelLink;
