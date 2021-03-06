const path=require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },{
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },{
                test:/\.(gif|jpg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name]-img.[ext]',
                        }
                    }
                    
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    mode:'development'
}