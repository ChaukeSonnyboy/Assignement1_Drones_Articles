
export const jumpToSubscribe = () => {
    const sectionToVisit = document.getElementById('subscribe');
    if (sectionToVisit) {
        sectionToVisit.scrollIntoView({ behavior: 'smooth' });
    }

    //added to see the functionality of the footer button when clicked
    const inputField = sectionToVisit.querySelector('input');
    if (inputField) {
        inputField.focus();
    }
};