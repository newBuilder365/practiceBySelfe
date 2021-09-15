//grunt的入口文件
//用于定义一些需要Grunt自动执行的任务

module.exports = grunt => {

    grunt.initConfig({
        foo: {
            bar: 123
        }
    })

    grunt.registerTask('foo', () => {
        console.log('foo')
    })

    grunt.registerTask('bar', () => {
        console.log(grunt.config('foo.bar'))
        console.log('hello Bar')
    })

    grunt.registerTask('default', ['foo', 'bar'])

    // grunt.registerTask('async',()=>{
    //     setTimeout(()=>{
    //         console.log('hello async')
    //     },1000)
    // })

    grunt.registerTask('async', function () {
        const done = this.async()
        setTimeout(() => {
            console.log('hello async')
            done()
        }, 1000)
    })
}