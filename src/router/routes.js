import HomePage from "@/components/pages/HomePage.vue"

export default [{
    path: '/',
    redirect: 'Home'
}, {
    path: '/Home',
    component: HomePage
}, {
    path: '*',
    redirect: '/'
}]
