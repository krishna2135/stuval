import React from 'react';
import { shape } from 'prop-types';
import Header from '../Header';
// import Footer from '../Footer';
import { container } from './styles';

const Layout = (props) => {
    const { children, location } = props;
    const emailId = localStorage.getItem('emailAfterLogin');
    const lang = localStorage.getItem('lang');

    const checkIfLoginPage = () => {
        const { pathname } = location;
        if (pathname === '/') {
            return {
                commonHeader: false,
            };
        } else if (pathname === '/forgot-password') {
            return {
                commonHeader: false,
            };
        } else if (pathname === '/generate-password') {
            return {
                commonHeader: false,
            };
        } else if (pathname === '/generate-new-password') {
            return {
                commonHeader: false,
            };
        } else if (pathname === '/register') {
            return {
                commonHeader: false,
            };
        } else if (pathname === '/admin-dashbord') {
            return {
                commonHeader: false,
            };
        }
        return {
            commonHeader: true,
        };
    };
    const { commonHeader } = checkIfLoginPage();
    return (
        <div className={container}>
            <Header commonHeader={commonHeader} lang={lang} emailId={emailId} />
            {children}
            {/* <Footer /> */}
        </div>
    );
};

Layout.propTypes = {
    children: shape({}).isRequired,
    location: shape({}).isRequired,
};
export default Layout;
