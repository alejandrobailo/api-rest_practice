const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from profesores', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const create = ({ nombre, experiencia }) => {
    return new Promesa((resolve, reject) => {
        db.query('insert into profesores (nombre, experiencia) values ?, ?', [nombre, experiencia], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};


module.exports = {
    getAll: getAll
};