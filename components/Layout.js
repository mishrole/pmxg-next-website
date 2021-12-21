import Header from './Header';
import Footer from './Footer';

// const Layout = (props) => (
const Layout = ({ children }) => (    
    <>
        <Header />
        {/* {props.children} */}
        { children }
        <Footer />
    </>
)

export default Layout;