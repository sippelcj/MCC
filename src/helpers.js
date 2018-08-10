
const helpers = {
    getDollarPerMS(salary) {
        // yearly / weeks / hours / minutes / seconds / 10
        const amount = salary / 52 / 40 / 60 / 60 / 10;
        return amount;
    },
}

export default helpers;
