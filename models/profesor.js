const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from profesores', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const create = ({ nombre, experiencia }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into profesores (nombre, experiencia) values (?, ?)', [nombre, experiencia], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const editProfesor = (id, { experiencia }) => {
    return new Promise((resolve, reject) => {
        db.query('update profesores set experiencia = ? where id = ?', [experiencia, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const deleteProfesor = function (id) {
    return new Promise(function (resolve, reject) {
        db.query('delete from profesores where id = ?', [id], function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    getAll: getAll,
    create: create,
    editProfesor: editProfesor,
    deleteProfesor, deleteProfesor
};