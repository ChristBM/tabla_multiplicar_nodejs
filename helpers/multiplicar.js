const fs = require('fs')
const colors = require('colors')

const CrearArchivo = async (base = 5, listar = false) => {
	if (listar) {
		console.log('====================='.rainbow)
		console.log('    Tabla del: '.trap, colors.green(base))
		console.log('====================='.rainbow)
	}

	let salida = ''
	let consola = ''

	for (let i = 1; i <= 10; i++) {
		salida += `${base} x ${i} = ${base * i}\n`
		consola += `${base} ${'x'.red} ${i} ${'='.red} ${colors.black.bgWhite(base * i)}\n`
	}

	if (listar) console.log(colors.cyan(consola))

	/* 	await fs.writeFile(`tabla-${base}.txt`, salida, err => {
		if (err) throw new Error()
		console.log('tabla.txt ha sido creado y salida ha sido guardada dentro')
	}) */

	await fs.writeFileSync(`./out/tabla-${base}.txt`, salida)

	return `tabla-${base}.txt`
}

module.exports = {
	CrearArchivo,
}
