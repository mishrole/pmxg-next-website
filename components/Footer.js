import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from './../styles/Footer.module.css'
import Link from 'next/link'
import Image from "next/image";
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}


const Footer = (props) => {
    const router = useRouter()
    const { locales } = router
    const { t } = useTranslation()

    const changeLanguage = (lang) => {
        router.push(router.pathname, router.pathname, { locale: lang })
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.Content}>
                <div className={styles.grid}>
                    <div className={styles.imageContent}>
                        <Image src="/assets/images/pmxg-footer-icon.png" width={168} height={64} />
                    </div>
                    <div className={styles.textContent}>
                        <p>{t('translation:footer.address')}</p>
                        <p>{t('translation:footer.address_info')}</p>
                        <p>{t('translation:footer.contact-us-here')}</p>
                        <p>{t('translation:footer.phone')}</p>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.title}>
                        <h5>MENU</h5>
                    </div>
                    <div className={styles.textContentb}>
                        <Link href="/">
                            <a className="header-link nav-link">{t('translation:home')}</a>
                        </Link>
                        <Link href="/products">
                            <a className="header-link nav-link">{t('translation:products')}</a>
                        </Link>
                        <a className="header-link nav-link" href="https://app.pmxg.com/contact">{t('translation:contact')}</a>
                        <Link href="/about-us">
                            <a className="header-link nav-link">{t('translation:about-us')}</a>
                        </Link>
                        <Link href="/services">
                            <a className="header-link nav-link">{t('translation:services')}</a>
                        </Link>

                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.title}>
                        <h5 class="text-uppercase">{t('translation:who-we-are')}</h5>
                    </div>
                    <div>
                        {/* <p className={styles.text}>
                            {t('translation:who-we-are_message')}
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer