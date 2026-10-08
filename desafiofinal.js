const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
  { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
  { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
  { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

const listarUsuarios = usuarios.map((u) => {
    return {
        nome: u.nome, 
        cargo: u.cargo
    };
});
const buscarUsuarioPorId = usuarios.find((u) => u.id === 2);
const listarUsuariosAtivos = usuarios.filter((u) => u.ativo === true);
const existeUsuarioInativo = usuarios.some((u) => u.ativo === false);
const todosUsuariosMaioresDeIdade = usuarios.every((u) => u.idade >= 18);
const calcularMediaIdade = usuarios.reduce((acumulador, usuarios) => acumulador + usuarios.idade, 0) / usuarios.length;

console.log("Lista resumida:", listarUsuarios);
console.log("Buscar ID 2:", buscarUsuarioPorId);
console.log("Ativos:", listarUsuariosAtivos);
console.log("Há inativos?", existeUsuarioInativo);
console.log("Todos maiores de idade?", todosUsuariosMaioresDeIdade);
console.log("Média de idade:", calcularMediaIdade);