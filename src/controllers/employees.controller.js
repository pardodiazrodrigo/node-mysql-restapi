import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
	try {
		const [rows] = await pool.query(`SELECT * FROM employee`);
		res.json(rows);
	} catch (error) {
		console.error("Error getEmployees: ", error);

		return res.status(500).json({
			message: "Something goes wrong",
		});
	}
};

export const getEmployee = async (req, res) => {
	try{
		const [rows] = await pool.query(
			`SELECT * FROM employee WHERE id= ${req.params.id}`
		);

		if (rows.length <= 0) {
			return res.status(404).json({
				message: "Employee not found",
			});
		} else {
			res.json(rows);
		}

	} catch (error) {
		console.error("Error getEmployee: ", error);

		return res.status(500).json({
			message: "Something goes wrong",
		});

	}
};

export const deleteEmployee = async (req, res) => {
	try{
		const [result] = await pool.query(
			`DELETE FROM employee WHERE id = ${req.params.id};`
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: "Employee not found",
			});
		} else {
			res.sendStatus(204);
		}

	} catch (error){
		console.error("Error deleteEmployee: ", error);
		res.status(500).json({
			message: "An error occurred while updating the employee",
		});
	}
};

export const createEmployees = async (req, res) => {
	const { name, salary } = req.body;
	try{
		const [rows] = await pool.query(
			`INSERT INTO employee(name, salary) VALUES ('${name}', '${salary}')`
		);

		res.send({
			id: rows.insertId,
			name,
			salary,
		});
	} catch (error) {
		console.error("Error createEmployees: ", error);

		return res.status(500).json({
			message: "Something goes wrong",
		});

	}
};

export const updateEmployee = async (req, res) => {
	const { id } = req.params;
	const { name, salary } = req.body;

	// Prepare the query using parameterized statements
	const query = `UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?`;
	const values = [name, salary, id];

	try {
		// Execute the query with the prepared statement
		const [result] = await pool.query(query, values);

		if (result.affectedRows === 0) {
			return res.status(404).json({
				message: "Employee not found",
			});
		}

		// Fetch the updated employee record from the database
		const [rows] = await pool.query(`SELECT * FROM employee WHERE id = ?`, [
			id,
		]);

		res.json(rows[0]);
	} catch (error) {
		console.error("Error updateEmployee: ", error);
		res.status(500).json({
			message: "An error occurred while updating the employee",
		});
	}
};
