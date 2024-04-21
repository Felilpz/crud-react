import { db } from "../db.js";

export const getUsers = (_, res) => {
    const consulta = "select * from usuarios";

    db.query(consulta, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};