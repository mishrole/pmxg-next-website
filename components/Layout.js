import Header from './Header'

// const Layout = (props) => (
const Layout = ({ children }) => (    
    <>
        <Header />
        {/* {props.children} */}
        { children }
    </>
)

export default Layout;