const HtmlWebpackPlugin = require ("html-webpack-plugin");
const CopyWebpackPlugin = require ("copy-webpack-plugin");
const path = require("path");

module.exports={

    plugins : [
        new HtmlWebpackPlugin({

            template : "./src/template.html",
            filename : "index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from : path.resolve(__dirname,"./src/images"),
                to : path.resolve(__dirname,"dist")
            }
            ]
        })
    ],
    entry : "./src/template.js",
    output : {
        path: path.resolve(__dirname,"dist"),
        filename : "index.js"
    },
    module : {
        rules : [

            {
                test : /\.css$/,
                use : [
                    {loader : "style-loader"},{loader:"css-loader"}
                ]
            }
        ]
    }
    }
