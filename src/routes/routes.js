const routers = [
    {
        component : 'StaticLayout',
        path: '/',
        exact: false,
        redirect:"/home",
        childrens: [
            {
                component: 'Home',
                path: 'home',
                // exact: true
            },
            {
                component: 'Form',
                path: 'form',
                // exact: true
            },
            {
                component: 'Records',
                path: 'records',
                // exact: true
            },
        ]
    }
]

export default routers 