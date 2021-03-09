import { isExportDeclaration } from "typescript";

describe ('Other cases', () => {
    it('Open base page', () => {
        browser.url(`https://www.carbi.me/`);

        const $showModalButton = $('a.nav-link.Ripple-parent.waves-effect.waves-light.active');
        const $modalHeader = $(`div.modal-header`);
        
        $showModalButton.click();
        expect($modalHeader).toHaveTextContaining(
            'Log In');
    });

    it('Password field is displayed and symols are hidden', () => {
        $(`input.form-control`).setValue(`123456789`);
        $(`button.btn-primary.btn.Ripple-parent`).click(); 

        expect($(`input[type="password"]`).isDisplayed());
    });

    it('RE-SEND button works', () => {
        const reSendButton = $(`button.btn-secondary.btn.Ripple-parent`);
        reSendButton.click();

        const value = $(`input.form-control`).getValue();
        expect(value).toBe(`123456789`);

        const clickable = $(`button.btn-primary.btn.Ripple-parent`).isClickable();
        expect(clickable).toBe(true);

        const displayed = $(`input[type="password"]`).isDisplayed();
        expect(displayed).toBe(false);
    });
});