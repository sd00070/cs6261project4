import { by, element } from "protractor";

export class ResistorCalculatorPanel {
    public get ohmsText() {
        return element(by.id('ohms-display')).getText()
    }

    public get toleranceText() {
        return element(by.id('tolerance-display')).getText()
    }

    public get firstDigitSelectValue() {
        return element(by.id('first-digit-select')).getAttribute('value')
    }

    public get secondDigitSelectValue() {
        return element(by.id('second-digit-select')).getAttribute('value')
    }

    public get thirdDigitSelectValue() {
        return element(by.id('third-digit-select')).getAttribute('value')
    }

    public get multiplierSelectValue() {
        return element(by.id('multiplier-select')).getAttribute('value')
    }

    public get toleranceSelectValue() {
        return element(by.id('tolerance-select')).getAttribute('value')
    }
}