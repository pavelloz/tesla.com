import(/* webpackChunkName: "icons" */ './icons');
import(/* webpackChunkName: "flags" */ './flags');
import(/* webpackChunkName: "gotham" */ './gotham');

const locale = i18n.locale;

if (locale !== 'en_US') {
    import(`./locale/${locale}`);
}
