const path = require("path");

module.exports = {
    entry: "./src/js/client.js",
    output: {
        filename: "client.min.js",
        path: path.resolve(__dirname, "src")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "src")
        // historyApiFallback: { index: "src/index.html" }
    }
};