var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname,'src');
var BUILD_DIR = path.resolve(__dirname,'dist/js');

var config = {
	entry: APP_DIR + '/index.js',
	output:{
		path:BUILD_DIR,
		publicPath:'/dist/js',
		filename:'bundle.min.js'
	},
	module:{
		loaders:[
			{
				test:/\.jsx?/,
				include:APP_DIR,
				loader:'babel-loader',
				exclude:'/node_modules/',
			},
			{
			    test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
			},
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000,
                    },},
            },
        ]
	},
	devServer: {
	    historyApiFallback: true,
	},
};

module.exports = config;