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
            SELECT 
                *
            FROM schemes
            WHERE schemes.id = 3
            LIMIT 1;
        */
       const schemaObject = db('schemes').where({ id }).first()
       if (!schemaObject){
           return Promise.resolve(null)
       } else {
           return schemaObject
       }
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
            .orderBy('st.step_number')
    },
    add(scheme) {
        /*
            INSERT INTO schemes (scheme_name)
            VALUES('Walk the Dog')            
                ---then---
            SELECT * FROM schemes
            ORDER BY id DESC
            LIMIT 1;
        */
        return db('schemes').insert(scheme)
            .then(newId => {
                return db('schemes').where('id', newId).first();
            })
    },
    update(changes, id) {
        /*
            UPDATE schemes
            SET scheme_name ='Charge iPad'
            WHERE id = 9
            ---then---
        */
        return db('schemes').where({ id }).update(changes)
            .then(numChanged => {
                if (numChanged = 1) {
                    return db('schemes').where({ id }).first()
                } else {
                    return null
                }
            })
    },
    remove(id) {
        /*
            DELETE FROM schemes
            WHERE id = 12;
        */
        const toDelete = db('schemes').where({ id }).first();
        db('schemes').where({ id }).del();
        return toDelete;
    }
}