var enable;

function CompileBeepPlugin(options) {
    enable = process.argv.indexOf('--env.beep') !== -1 || process.argv.indexOf('--beep') !== -1;
}

CompileBeepPlugin.prototype.apply = function(compiler) {
    const onCompileDone = () => {
        enable && alertTerminal();
    };
    if (compiler.hooks) {
        compiler.hooks.done.tap('CompileBeepPlugin', onCompileDone);
    } else {
        compiler.plugin('done', onCompileDone);
    }
};

function alertTerminal(){
    console.log("\007");
}

module.exports = CompileBeepPlugin;
