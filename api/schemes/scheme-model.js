// scheme-model
const db = require('../../data/db-config')

module.exports = {
    find() {
        /*
            SELECT * FROM schemes;
        */
       return db('schemes')
    },
    findById(id) {
        /*

        */
    },
    findSteps(id) {
        /*
            SELECT 
                st.id,
                sc.scheme_name,
                st.step_number,
                st.instructions
            FROM steps st
            JOIN schemes sc
                ON st.scheme_id = sc.id
            WHERE st.scheme_id = 3
            ORDER BY st.step_number;
        */
        return db('steps as st')
            .join('schemes as sc', 'sc.id', 'st.scheme_id')
            .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
            .where('st.scheme_id', id)
            .orderby('st.step_number')
    },
    add(scheme) {
        /*

        */
    },
    update(changes, id) {
        /*

        */
    },
    remove(id) {
        /*

        */
    }
}