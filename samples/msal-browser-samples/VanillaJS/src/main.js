import home from './pages/home.js';
import profile from './pages/profile.js'

const routes = {
    '/': home,
    '/profile': profile
}

routes[window.location.pathname]();