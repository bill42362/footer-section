// App.react.js
import React from 'react';
// import FooterSection from 'footer-section';
import FooterSection from '../../../../src/js/index.js';

class App extends React.Component {
    constructor(props) { super(props); }
    render() {
        return <div className='app'>
            <FooterSection>
            </FooterSection>
        </div>;
    }
}

export default App;
