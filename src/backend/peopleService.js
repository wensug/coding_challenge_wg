const db = require('./people.json')

module.exports = function sortObjectArrayByName() {
    return  db.people.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
    });
}