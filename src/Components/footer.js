import React from 'react';
import '../Assets/css/components/footer.css';

import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/github';
import { envelope } from 'react-icons-kit/fa/envelope';

class Footer extends React.Component {
    render() {
        return (
            <div className="site-info-container">
                <div className="site-link-container">
                    <a href="https://github.com/dakotamaker" rel="noopener noreferrer" target="_blank"><Icon icon={github} size={30}/></a>
                    <a href="mailto:dakotamaker@gmail.com"><Icon icon={envelope} size={30}/></a>
                </div>
                &copy; {(new Date().getFullYear())} Dakota Maker 
            </div>
        );
    }
}

export default Footer;