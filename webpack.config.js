module.exports = {
    entry: "./app.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "jsx" },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};