const { resolve } = require('path')

module.exports = {
    root: resolve(__dirname, './src'),
    build: {
        rollupOptions: {
            /*
                Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
                interna de Rollup de Vite.
            */
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/index.html'),
            },
            output: {
                dir: resolve(__dirname, 'build'), //Donde se va a crear el build de nuestra aplicacion
                format: 'es', //Formato de ES modules
            },
        },
        outDir: resolve(__dirname, 'build'),
        //minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
    },
}
