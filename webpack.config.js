const path = require("path");

module.exports = {
    entry: './app/index.js',
    
    target: 'node', // use require and use NodeJS CommonJS style
    externalsPresets: {
        node: true // in order to ignore built-in modules like path, fs, etc. 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    }
}
