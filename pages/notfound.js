import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"])),
    },
  };
}

const NotFound = () => {
  const { t } = useTranslation();

  return <h1>Not found</h1>;
};

export default NotFound;
