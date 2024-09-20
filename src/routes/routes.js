import configs from '../configs';

//  layouts

//  pages
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import FaqPage from '../pages/FaqPage';
import HomePage from '../pages/HomePage';
import PaymentPage from '../pages/PaymentPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductPage from '../pages/ProductPage';
import ProfilePage from '../pages/ProfilePage';
import SearchPage from '../pages/SearchPage';
import SettingPage from '../pages/SettingPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import StoryPage from '../pages/StoryPage';
import TransactionPage from '../pages/TransactionPage';

//  public router
const publicRoutes = [
    { path: configs.routes.contact, component: ContactPage },
    { path: configs.routes.error, component: ErrorPage, noLayout: true },
    { path: configs.routes.faq, component: FaqPage },
    { path: configs.routes.home, component: HomePage },
    { path: configs.routes.productDetail, component: ProductDetailPage },
    { path: configs.routes.product, component: ProductPage },
    { path: configs.routes.search, component: SearchPage, noLayout: true },
    { path: configs.routes.signIn, component: SignInPage },
    { path: configs.routes.signUp, component: SignUpPage, noLayout: true },
    { path: configs.routes.story, component: StoryPage },
];

//  private routes
const privateRoutes = [
    { path: configs.routes.profile, component: ProfilePage, noLayout: true },
    { path: configs.routes.shoppingCart, component: ShoppingCartPage },
    { path: configs.routes.payment, component: PaymentPage, noLayout: true },
    { path: configs.routes.setting, component: SettingPage },
    { path: configs.routes.transaction, component: TransactionPage },
];

export { publicRoutes, privateRoutes };
