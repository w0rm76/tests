describe('Validation for login field', () => {

    it('Open base page', () => {
        browser.url(`https://www.carbi.me/`);

        const $showModalButton = $('a.nav-link.Ripple-parent.waves-effect.waves-light.active');
        const $modalHeader = $(`div.modal-header`);
        
        $showModalButton.click();
        expect($modalHeader).toHaveTextContaining(
            'Log In');
    }); 
            
    it('Input 0 digits - Button disabled', () => {
        const $getPasswordButton = $(`button.btn-primary.btn.Ripple-parent:disabled`);

        expect($getPasswordButton).exists;
    });

    // skipped, it fails because of bug #002
    it.skip('Input 1 digits', () => {

        $(`input.form-control`).setValue(`1`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        expect($(`div.modal-body > span[data-testid="errorMessage"]`)).toHaveTextContaining(
            'User with this ID not exists');
    });

    it('Input 2 digits', () => {

        $(`input.form-control`).setValue(`12`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        expect($(`div.modal-body > span[data-testid="errorMessage"]`)).toHaveTextContaining(
            'User with this ID not exists');
    });

    it('Input 8 digits', () => {

        $(`input.form-control`).setValue(`12345678`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        expect($(`div.modal-body > span[data-testid="errorMessage"]`)).toHaveTextContaining(
            'User with this ID not exists');
    });

    it('Input 10 digits', () => {

        $(`input.form-control`).setValue(`1234567890`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        expect($(`div.modal-body > span[data-testid="errorMessage"]`)).toHaveTextContaining(
            'User with this ID not exists');
    });

    it('Input 12 digits', () => {

        $(`input.form-control`).setValue(`123456789012`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        expect($(`div.modal-body > span[data-testid="errorMessage"]`)).toHaveTextContaining(
            'User with this ID not exists');
    });

    it('Input more than 12 digits', () => {

        $(`input.form-control`).setValue(`1234567890123`); 
        const value = $(`input.form-control`).getValue();

        expect(value).toBe(`123456789012`);
    });

    it('Input non digits', () => {
        $(`input.form-control`).setValue(1); 
        $(`input.form-control`).setValue(`aBc!~`); 
        const value = $(`input.form-control`).getValue();

        expect(value).toBe(`1`);
    });
});


