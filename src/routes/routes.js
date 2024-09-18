import configs from '../configs';

//  layouts

//  pages
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import FaqPage from '../pages/FaqPage';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductPage from '../pages/ProductPage';
import ProfilePage from '../pages/ProfilePage';
import SearchPage from '../pages/SearchPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import StoryPage from '../pages/StoryPage';

//  init public router
const publicRoutes = [
    { path: configs.routes.contact, component: ContactPage },
    { path: configs.routes.error, component: ErrorPage },
    { path: configs.routes.faq, component: FaqPage },
    { path: configs.routes.home, component: HomePage },
    { path: configs.routes.productDetail, component: ProductDetailPage },
    { path: configs.routes.product, component: ProductPage },
    { path: configs.routes.profile, component: ProfilePage },
    { path: configs.routes.search, component: SearchPage, layout: null },
    { path: configs.routes.signIn, component: SignInPage },
    { path: configs.routes.signUp, component: SignUpPage },
    { path: configs.routes.story, component: StoryPage },
];

//  init private routes
const privateRoutes = [
    // { path: '/@:nickname', component: ProfilePage }
];

export { publicRoutes, privateRoutes };
