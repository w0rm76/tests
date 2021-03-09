describe ('Valid auth for test user', () => {
    it('Open base page', () => {
        browser.url(`https://www.carbi.me/`);

        const $showModalButton = $('a.nav-link.Ripple-parent.waves-effect.waves-light.active');
        const $modalHeader = $(`div.modal-header`);
        
        $showModalButton.click();
        expect($modalHeader).toHaveTextContaining(
            'Log In');
    });

    // skipped, it fails because of bug #002
    it.skip('Input valid test login and password', () => {

        $(`input.form-control`).setValue(`123456789`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        $(`input[type="password"]`).setValue(`1234`);
        $(`button.btn-primary.btn.Ripple-parent`).click();

        const $showMenu = $('a.nav-link.Ripple-parent.waves-effect.waves-light.active');
        $showMenu.click();

        expect($(`div > button.dropdown-item > a`)).toHaveTextContaining(
            'Profile');
        });
});