describe ('Invalid password', () => {
    it('Open base page', () => {
        browser.url(`https://www.carbi.me/`);

        const $showModalButton = $('a.nav-link.Ripple-parent.waves-effect.waves-light.active');
        const $modalHeader = $(`div.modal-header`);
        
        $showModalButton.click();
        expect($modalHeader).toHaveTextContaining(
            'Log In');
    });

    it('Input invalid login', () => {

        $(`input.form-control`).setValue(`666666666`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        expect($(`div.modal-body > span[data-testid="errorMessage"]`)).toHaveTextContaining(
            'User with this ID not exists');
    });

    it('Input valid login + invalid password', () => {
        $(`input.form-control`).setValue(`123456789`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        $(`input[type="password"]`).setValue(`0000`);
        $(`button.btn-primary.btn.Ripple-parent`).click();

        expect($(`div.modal-body > span[data-testid="errorMessage"]`)).toHaveTextContaining(
            'Wrong User ID or password');
        });
});