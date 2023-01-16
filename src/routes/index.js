import { HeaderOnly } from '~/components/Layouts';

import Home from '~/components/Pages/Home';
import Following from '~/components/Pages/Following';
import Profile from '~/components/Pages/Profile';
import Upload from '~/components/Pages/Upload';
import Search from '~/components/Pages/Search';

const publishRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
