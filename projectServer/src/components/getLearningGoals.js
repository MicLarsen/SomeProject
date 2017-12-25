let data = require('../data/QnA')

let getLearningGoals = function (p) {
    switch (p) {
        case "1": return data[p - 1].periode1
        case "2": return data[p - 1].periode2
        case "3": return data[p - 1].periode3
        case "4": return data[p - 1].periode4
        case "5": return data[p - 1].periode5
        default: break
    }
}
module.exports = { getLearningGoals: getLearningGoals }