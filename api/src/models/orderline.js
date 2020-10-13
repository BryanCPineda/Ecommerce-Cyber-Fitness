const { Sequelize, BOOLEAN } = require("sequelize");
const S = Sequelize;

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.module.exports = (sequelize) =>

sequelize.define("orderline", {
  id: {
    type: S.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  price: {
    type: S.DECIMAL(9, 2),
    allowNull: false,
    validate: {
      notNull: {
        msg: "Se requiere un precio",
      },
      isDecimal: {
        msg:
          'El precio debe contener sus decimales (centavos), de ser un precio exacto puede incluir "00"',
      },
      min: {
        args: [0],
        msg: "El precio no puede ser menor que 0,00",
      },
      max: {
        args: [999999999],
        msg: "El precio no puede contener más de 9 dígitos delante de la coma.",
      },
    },
  },
  Quantity: {
    type: S.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Se requiere una cantidad",
      },
    },
  },
});
