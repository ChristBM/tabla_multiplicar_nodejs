const { CrearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

const base = argv.b
const listar = argv.l
const hasta = argv.h

if (hasta) {
	for (let i = base; i <= hasta; i++) {
		CrearArchivo(i, listar)
			.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
			.catch(err => console.error(err))
	}
} else {
	CrearArchivo(base, listar)
		.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
		.catch(err => console.error(err))
}
