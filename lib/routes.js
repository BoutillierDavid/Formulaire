FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('homeLayout', {
            main: 'home'
        });
    }
});


FlowRouter.route('/acceuilAdmin', {
    name: 'acceuilAdmin',
    action() {
        BlazeLayout.render('adminLayout', {
            main: 'acceuilAdmin'
        });
    }
});
FlowRouter.route('/formulaireRecu', {
    name: 'formulaireRecu',
    action() {
        BlazeLayout.render('adminLayout', {
            main: 'formulaireRecu'
        });
    }
});

FlowRouter.route('/acceuilClient', {
    name: 'acceuilClient',
    action() {
        BlazeLayout.render('clientLayout', {
            main: 'acceuilClient'
        });
    }
});
FlowRouter.route('/formulaire', {
    name: 'formulaire',
    action() {
        BlazeLayout.render('clientLayout', {
            main: 'formulaire'
        });
    }
});
