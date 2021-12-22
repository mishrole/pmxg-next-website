import Footer from './Footer';
import Header from './Header'

// const Layout = (props) => (
const Layout = ({ children }) => (
    <>
        <Header />
        {/* {props.children} */}
        {children}

        <Footer />
    </>
)

export default Layout;