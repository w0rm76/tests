describe ('Invalid password', () => {
    it('Open base page', () => {
        browser.url(`https://www.carbi.me/`);

        const $showModalButton = $('a.nav-link.Ripple-parent.waves-effect.waves-light.active');
        const $modalHeader = $(`div.modal-header`);
        
        $showModalButton.click();
        expect($modalHeader).toHaveTextContaining(
            'Log In');
    });

    it('Input 0 digits - Button disabled', () => {

        $(`input.form-control`).setValue(`123456789`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        const $getPasswordButton = $(`button.btn-primary.btn.Ripple-parent:disabled`);
        expect($getPasswordButton).exists;
    });

    it('Input 1 digit', () => {
        $(`input[type="password"]`).setValue(`1`);
        const $getPasswordButton = $(`button.btn-primary.btn.Ripple-parent:disabled`);
        
        // click on any place of modal to see the error message
        $(`div[data-test="modal-header"]`).click();

        const existance = $getPasswordButton.isExisting();
        expect(existance).toBe(true);

        expect($(`div.modal-body > span[data-testid="errorMessage"]`)).toHaveTextContaining(
            'Password should contain 4 digits');
    });

    it('Input 3 digits', () => {
        $(`input[type="password"]`).addValue(`23`);
        const $getPasswordButton = $(`button.btn-primary.btn.Ripple-parent:disabled`);
        // click on any place of modal to see the error message
        $(`div[data-test="modal-header"]`).click();

        expect($getPasswordButton).exists;
        expect($(`div.modal-body > span[data-testid="errorMessage"]`)).toHaveTextContaining(
            'Password should contain 4 digits');
    });

    it('Input non digits', () => {
        $(`input[type="password"]`).addValue(`aBc!~`); 
        const value = $(`input[type="password"]`).getValue();

        expect(value).toBe(`123`);
    });

    it('Input more than 4 digits', () => {
        $(`input[type="password"]`).addValue(`45678`); 
        const value = $(`input[type="password"]`).getValue();

        expect(value).toBe(`1234`);
    });
});