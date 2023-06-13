import * as React from 'react';
import lang from '../i18n';
import { CSSProperties } from 'react';

interface AboutProps {
    style?: CSSProperties;
}

export default class About extends React.Component<AboutProps, {}> {

    render() {
        return (
            <div style={Object.assign({ padding: 12, fontSize: 14, fontWeight: 200 }, this.props.style)}>
                
                
            </div>
        );
    }
}