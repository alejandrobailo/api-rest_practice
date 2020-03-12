const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from ejercicios', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const create = ({ titulo, duracion, repeticiones }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into ejercicios (titulo, duracion, repeticiones) values (?, ?, ?)',
            [titulo, duracion, repeticiones],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}


const editEjercicio = ({ duracion }, id) => {
    return new Promise((resolve, reject) => {
        db.query('update ejercicios set duracion = ? where id = ?', [duracion, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}


const deleteEjercicio = (id) => {
    return new Promise((resolve, reject) => {
        db.query('delete from ejercicios where id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}


module.exports = {
    getAll: getAll,
    create: create,
    editEjercicio: editEjercicio,
    deleteEjercicio: deleteEjercicio
}