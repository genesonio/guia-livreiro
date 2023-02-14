/**
 * This utility is used to display welcome message in the console
 */
export function displayWelcome() {
    const styles = [
        'font-size: 48px',
        `color: #FFFFFF`,
        `border: 1px solid #48B7DD`,
        `background-color: #5151FC`,
        'border-radius: 5px',
        'padding: 10px',
    ].join(';')

    // eslint-disable-next-line no-console
    console.log(`%cBem vindo(a) ao Guia Livreiro!`, styles)
}
