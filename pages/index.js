import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { OurServices } from '../components/home/OurServices';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}

const Home = (props) => {

    return (
        <>
            <Hero></Hero>
            <Stats></Stats>
            <OurServices></OurServices>
        </>
        
    )
}

export default Home;