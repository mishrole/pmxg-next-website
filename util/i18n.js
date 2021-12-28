import { useTranslation } from "next-i18next";

export default function loadLocale (localeName) {

    const { i18n } = useTranslation();
    console.log("loadLocale", i18n);

    const test = () => {

        let result;

        import(`../public/locales/${localeName}/home.json`).then(en => {
            console.log("archivo: ",en);
            result = en;
        });

        return result;
    }

    return { test }

}

// export default function useLogOut() {
    
//     const history = useHistory();
  
//     // we don't useEffect here, we are only interested in function logoutUser
  
//     const logoutUser = () => {
//         const response = axiosInstance.post('user/logout/blacklist/', {
//             refresh_token: localStorage.getItem('refresh_token'),
//         });
//         localStorage.removeItem('access_token');
//         localStorage.removeItem('refresh_token');
//         axiosInstance.defaults.headers['Authorization'] = null;
//         history.push('/login');
//       }
  
//     return { logoutUser }
//   };