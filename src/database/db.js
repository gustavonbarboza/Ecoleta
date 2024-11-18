//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que vai fazer as operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db


//ultilizar o objeto de banco de dados, para nossas operações
// db.serialize( () => {
// //   //com comandos SQL eu vou:

//     //1 criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         states TEXT,
//     //         city TEXT,
//     //         itens TEXT
//     //     );
//     // `)
  
// //   //2 inserir dados na tabela
// //   const query = `
// //         INSERT INTO places (
// //           image, 
// //           name,
// //           address,
// //           address2,
// //           states,
// //           city,
// //           itens
// //         ) VALUES (?,?,?,?,?,?,?);
// //     `

// //   const values = [
// //     "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     "Papersider",
// //     "Guilherme Gemballa, Jardim América",
// //     "Número 260",
// //     "Santa Catarina",
// //     "Rio do Sul",
// //     "Resíduos Eltrônicos, Lâmpadas"
// //   ]

// //   function afterInsertData(err) {
// //     if(err) {
// //       return console.log(err)
// //     }

// //     console.log("Cadastrado com sucesso")
// //     console.log(this)
// //   }


// // db.run(query, values, afterInsertData)

// //   //3 consultar os dados da tabela
// //   // db.all(`SELECT name FROM places`, function(err, rows) {
// //   //   if(err) {
// //   //     return console.log(err)
// //   //   }
  
// //   //   console.log("Aqui estao os seus registros: ")
// //   //   console.log(rows)
// //   // })


//   //4 deletar um dado da tabela
//   // db.run (`DELETE FROM places WHERE id = ?`, [27], function (err) {
//   //   if(err) {
//   //     return console.log(err)
//   //   }

//   //   console.log("Registro Deletado com sucesso!")
//   // })


// })