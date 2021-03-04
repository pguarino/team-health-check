module.exports = (sequelize, Sequelize) => {
    const Topics = sequelize.define("topics", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })

    return Topics
}