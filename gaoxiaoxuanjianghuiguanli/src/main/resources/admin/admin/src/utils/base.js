const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaoxuanjianghuiguanli/",
            name: "gaoxiaoxuanjianghuiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaoxuanjianghuiguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校宣讲会管理系统"
        } 
    }
}
export default base
