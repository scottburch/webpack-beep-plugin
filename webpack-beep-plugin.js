var enable;

function CompileBeepPlugin(options) {
    enable = process.argv.indexOf('--beep') !== -1;
}

CompileBeepPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        enable && alertTerminal();
    });
};

function alertTerminal(){
    console.log("\007");
}

module.exports = CompileBeepPlugin;