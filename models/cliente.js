const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const create = ({ nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into clientes (nombre, apellidos, direccion, email, edad, sexo, fecha_inscripcion, cuota, fecha_nacimiento, dni) values (?, ? ,? ,?, ?, ?, ?, ?, ?, ?)',
            [nombre, apellidos, direccion, email, edad, sexo, new Date(), cuota, fecha_nacimiento, dni],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}


const editCliente = ({ email }, id) => {
    return new Promise((resolve, reject) => {
        db.query('update clientes set email = ? where id = ?', [email, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}


const deleteCliente = (id) => {
    return new Promise((resolve, reject) => {
        db.query('delete from clientes where id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}


module.exports = {
    getAll: getAll,
    create: create,
    deleteCliente: deleteCliente,
    editCliente: editCliente
}