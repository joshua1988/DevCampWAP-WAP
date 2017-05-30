var Foo = {
  template: `
    <div>foo <router-view></router-view></div>
  `,
};
var Bar = { template: '<div>bar</div>' };
var FooHome = { template: '<p>FooHome</p>' };

var routes = [
  {
    path: '/foo',
    component: Foo,
    children: [
      { path: '', component: FooHome }
    ]
  },
  { path: '/bar', component: Bar }
];

var router = new VueRouter({
  routes
});

var app = new Vue({
  router
}).$mount('#app');
