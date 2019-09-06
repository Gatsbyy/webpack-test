function HelloWorldPlugin(options) {

}

HelloWorldPlugin.prototype.apply = function (compiler) {
	// compiler.plugin("emit", function (compilation, callback) { // 异步需要传入callback
	// 	// console.log(compilation);
	// 	// 异步处理
	// 	Promise.resolve().then(() => {
	// 		console.log("promise");
	// 		callback();
	// 	})
	// })

	// compiler.hooks.emit.tap("HelloWorldPlugin", (compilation) => {
	// 	var filelist = 'Hello World; \n\n';
	//
	// 	for(var filename in compilation.asserts) {
	// 		filelist += ('- '+ filename +'\n');
	// 	}
	//
	// 	compilation.assets['filelist.md'] = {
	// 		source: function() {
	// 			return filelist;
	// 		},
	// 		size: function() {
	// 			return filelist.length;
	// 		}
	// 	};
	//
	// 	// callback();
	//
	//
	// 	// console.log("done compilation")
	// 	console.log("emit");
	// });
	compiler.hooks.done.tapAsync("HelloWorldPlugin", (compiler, callback) => {


		console.log("done");
		callback();
	});
	compiler.hooks.run.tapPromise("HelloWorldPlugin", (compiler) => {
		return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
			console.log('以具有延迟的异步方式触及 run 钩子')
		});
	})
	// compiler.hooks.compile.tap("HelloWorldPlugin", () => {
	// 	// console.log("done compilation")
	// 	console.log("compile");
	// });
	// compiler.hooks.watchRun.tap("HelloWorldPlugin", () => {
	// 	// console.log("done compilation")
	// 	console.log("watchRun");
	// });
	//
	// compiler.hooks.watchClose.tap("HelloWorldPlugin", () => {
	// 	// console.log("done compilation")
	// 	console.log("watchClose");
	// });
	// compiler.hooks.invalid.tap("HelloWorldPlugin", () => {
	// 	// console.log("done compilation")
	// 	console.log("invalid");
	// });
	//
	// compiler.hooks.run.tap("HelloWorldPlugin", (compilation) => {
	//
	// 	compilation.hooks.seal.tap("HelloWorldPlugin", () => {
	// 		console.log("done compilation")
	// 	});
	// 	// console.log("done compilation")
	// 	console.log("run");
	// });
	//
	// compiler.hooks.entryOption.tap("HelloWorldPlugin", () => {
	// 	// console.log("done compilation")
	// 	console.log("entryOption");
	// });
	// compiler.hooks.environment.tap("HelloWorldPlugin", () => {
	// 	// console.log("done compilation")
	// 	console.log("environment");
	// });

}

module.exports = HelloWorldPlugin;
