//此文件作为Generator的核心入口
//需要导出一个继承至Yeoman Generator的类型
//Yeoman Generator在工作时会自动调用我们在此类型中定义的一些生命周期方法
//我们在这些方法中可以调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    prompting() {
        //Yoeman在询问用户环节会自动调用此方法
        //在此方法中可以调用父类的prompt()方法发出对用户的命令行的询问
        return this.prompt({
            type: "input",
            name: "name",
            message: "Your Project Name",
            default: this.appname
        }).then(answers=>{
            this.answers = answers
        })
    }

    writing() {
        //Yeoman在生成文件阶段会调用此方法
        // this.fs.write(
        //     this.destinationPath("temp.text"),
        //     Math.random().toString()
        // )

        //通过模板方式写入文件到目标目录
        //模板文件目录
        const tmpl = this.templatePath('foo.txt')
        //输出文件目录
        const outPath = this.destinationPath('foo.txt')
        //模板数据上下文
        const context = { title: "hello template", success: true }
        this.fs.copyTpl(tmpl, outPath, context)
    }
}