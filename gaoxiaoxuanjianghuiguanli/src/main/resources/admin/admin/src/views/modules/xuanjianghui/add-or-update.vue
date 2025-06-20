<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='gongsi'">
                    <el-form-item class="select" v-if="type!='info'"  label="企业" prop="gongsiId">
                        <el-select v-model="ruleForm.gongsiId" :disabled="ro.gongsiId" filterable placeholder="请选择企业" @change="gongsiChange">
                            <el-option
                                    v-for="(item,index) in gongsiOptions"
                                    v-bind:key="item.id"
                                    :label="item.gongsiName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='gongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="企业名称" prop="gongsiName">
                        <el-input v-model="gongsiForm.gongsiName"
                                  placeholder="企业名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="企业名称" prop="gongsiName">
                            <el-input v-model="ruleForm.gongsiName"
                                      placeholder="企业名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='gongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="企业类型" prop="gongsiValue">
                        <el-input v-model="gongsiForm.gongsiValue"
                                  placeholder="企业类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="企业类型" prop="gongsiValue">
                            <el-input v-model="ruleForm.gongsiValue"
                                      placeholder="企业类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='gongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="联系方式" prop="gongsiPhone">
                        <el-input v-model="gongsiForm.gongsiPhone"
                                  placeholder="联系方式" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="联系方式" prop="gongsiPhone">
                            <el-input v-model="ruleForm.gongsiPhone"
                                      placeholder="联系方式" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='gongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="邮箱" prop="gongsiEmail">
                        <el-input v-model="gongsiForm.gongsiEmail"
                                  placeholder="邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="邮箱" prop="gongsiEmail">
                            <el-input v-model="ruleForm.gongsiEmail"
                                      placeholder="邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='gongsi' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.gongsiPhoto" label="企业封面" prop="gongsiPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (gongsiForm.gongsiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.gongsiPhoto" label="企业封面" prop="gongsiPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.gongsiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="gongsiId" name="gongsiId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="宣讲会标题" prop="xuanjianghuiName">
                       <el-input v-model="ruleForm.xuanjianghuiName"
                                 placeholder="宣讲会标题" clearable  :readonly="ro.xuanjianghuiName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="宣讲会标题" prop="xuanjianghuiName">
                           <el-input v-model="ruleForm.xuanjianghuiName"
                                     placeholder="宣讲会标题" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.xuanjianghuiPhoto" label="宣讲会封面" prop="xuanjianghuiPhoto">
                        <file-upload
                            tip="点击上传宣讲会封面"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.xuanjianghuiPhoto?$base.url+ruleForm.xuanjianghuiPhoto:''"
                            @change="xuanjianghuiPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.xuanjianghuiPhoto" label="宣讲会封面" prop="xuanjianghuiPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.xuanjianghuiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="企业资质" prop="xuanjianghuiDaiyu">
                       <el-input v-model="ruleForm.xuanjianghuiDaiyu"
                                 placeholder="企业资质" clearable  :readonly="ro.xuanjianghuiDaiyu"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="企业资质" prop="xuanjianghuiDaiyu">
                           <el-input v-model="ruleForm.xuanjianghuiDaiyu"
                                     placeholder="企业资质" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="宣讲会类型" prop="xuanjianghuiTypes">
                        <el-select v-model="ruleForm.xuanjianghuiTypes" :disabled="ro.xuanjianghuiTypes" placeholder="请选择宣讲会类型">
                            <el-option
                                v-for="(item,index) in xuanjianghuiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="宣讲会类型" prop="xuanjianghuiValue">
                        <el-input v-model="ruleForm.xuanjianghuiValue"
                            placeholder="宣讲会类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="专业" prop="zhuanyeTypes">
                        <el-select v-model="ruleForm.zhuanyeTypes" :disabled="ro.zhuanyeTypes" placeholder="请选择专业">
                            <el-option
                                v-for="(item,index) in zhuanyeTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="专业" prop="zhuanyeValue">
                        <el-input v-model="ruleForm.zhuanyeValue"
                            placeholder="专业" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="招聘岗位" prop="xuanjianghuiGangwei">
                       <el-input v-model="ruleForm.xuanjianghuiGangwei"
                                 placeholder="招聘岗位" clearable  :readonly="ro.xuanjianghuiGangwei"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="招聘岗位" prop="xuanjianghuiGangwei">
                           <el-input v-model="ruleForm.xuanjianghuiGangwei"
                                     placeholder="招聘岗位" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="招聘人数" prop="xuanjianghuiRenshuNumber">
                       <el-input v-model="ruleForm.xuanjianghuiRenshuNumber"
                                 placeholder="招聘人数" clearable  :readonly="ro.xuanjianghuiRenshuNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="招聘人数" prop="xuanjianghuiRenshuNumber">
                           <el-input v-model="ruleForm.xuanjianghuiRenshuNumber"
                                     placeholder="招聘人数" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info'"  class="input" label="宣讲时间" prop="xuanjianghuiTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.xuanjianghuiTime"
                                type="datetime"
                                placeholder="宣讲时间"
                                :disabled="ro.xuanjianghuiTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.xuanjianghuiTime" label="宣讲时间" prop="xuanjianghuiTime">
                            <span v-html="ruleForm.xuanjianghuiTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="线下面试" prop="xianxiaTypes">
                        <el-select v-model="ruleForm.xianxiaTypes" :disabled="ro.xianxiaTypes" placeholder="请选择线下面试">
                            <el-option
                                v-for="(item,index) in xianxiaTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="线下面试" prop="xianxiaValue">
                        <el-input v-model="ruleForm.xianxiaValue"
                            placeholder="线下面试" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="宣讲会详情" prop="xuanjianghuiContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.xuanjianghuiContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.xuanjianghuiContent" label="宣讲会详情" prop="xuanjianghuiContent">
                            <span v-html="ruleForm.xuanjianghuiContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            <el-col :span="12" v-if="type=='info'">
                <div>
                    <el-form-item v-if="ruleForm.xuanjianghuiYesnoTypes" label="审核状态" prop="xuanjianghuiYesnoTypes">
                        <el-input v-model="ruleForm.xuanjianghuiYesnoValue" placeholder="审核状态" readonly></el-input>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :span="12" v-if="type=='info'">
                <div>
                    <el-form-item v-if="ruleForm.xuanjianghuiYesnoText" label="审核回复" prop="xuanjianghuiYesnoText">
                        <span v-html="ruleForm.xuanjianghuiYesnoText"></span>
                    </el-form-item>
                </div>
            </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                gongsiForm: {},
                ro:{
                    gongsiId: false,
                    xuanjianghuiName: false,
                    xuanjianghuiPhoto: false,
                    xuanjianghuiDaiyu: false,
                    xuanjianghuiTypes: false,
                    zhuanyeTypes: false,
                    xuanjianghuiGangwei: false,
                    xuanjianghuiRenshuNumber: false,
                    xuanjianghuiTime: false,
                    xianxiaTypes: false,
                    xuanjianghuiContent: false,
                    xuanjianghuiYesnoTypes: false,
                    xuanjianghuiYesnoText: false,
                },
                ruleForm: {
                    gongsiId: '',
                    xuanjianghuiName: '',
                    xuanjianghuiPhoto: '',
                    xuanjianghuiDaiyu: '',
                    xuanjianghuiTypes: '',
                    zhuanyeTypes: '',
                    xuanjianghuiGangwei: '',
                    xuanjianghuiRenshuNumber: '',
                    xuanjianghuiTime: '',
                    xianxiaTypes: '',
                    xuanjianghuiContent: '',
                    xuanjianghuiYesnoTypes: '',
                    xuanjianghuiYesnoText: '',
                },
                xuanjianghuiTypesOptions : [],
                zhuanyeTypesOptions : [],
                xianxiaTypesOptions : [],
                xuanjianghuiYesnoTypesOptions : [],
                gongsiOptions : [],
                rules: {
                   gongsiId: [
                              { required: true, message: '企业不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   xuanjianghuiName: [
                              { required: true, message: '宣讲会标题不能为空', trigger: 'blur' },
                          ],
                   xuanjianghuiPhoto: [
                              { required: true, message: '宣讲会封面不能为空', trigger: 'blur' },
                          ],
                   xuanjianghuiDaiyu: [
                              { required: true, message: '企业资质不能为空', trigger: 'blur' },
                          ],
                   xuanjianghuiTypes: [
                              { required: true, message: '宣讲会类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   zhuanyeTypes: [
                              { required: true, message: '专业不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   xuanjianghuiGangwei: [
                              { required: true, message: '招聘岗位不能为空', trigger: 'blur' },
                          ],
                   xuanjianghuiRenshuNumber: [
                              { required: true, message: '招聘人数不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   xuanjianghuiTime: [
                              { required: true, message: '宣讲时间不能为空', trigger: 'blur' },
                          ],
                   xianxiaTypes: [
                              { required: true, message: '线下面试不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   xuanjianghuiContent: [
                              { required: true, message: '宣讲会详情不能为空', trigger: 'blur' },
                          ],
                   xuanjianghuiYesnoTypes: [
                              { required: true, message: '审核状态不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   xuanjianghuiYesnoText: [
                              { required: true, message: '审核回复不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=xuanjianghui_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.xuanjianghuiTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhuanye_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.zhuanyeTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=xianxia_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.xianxiaTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=xuanjianghui_yesno_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.xuanjianghuiYesnoTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `gongsi/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.gongsiOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            gongsiChange(id){
                this.$http({
                    url: `gongsi/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.gongsiForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `xuanjianghui/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.gongsiChange(data.data.gongsiId)
                        _this.ruleForm.xuanjianghuiContent = _this.ruleForm.xuanjianghuiContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.xuanjianghuiContent = this.ruleForm.xuanjianghuiContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`xuanjianghui/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.xuanjianghuiCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.xuanjianghuiCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            xuanjianghuiPhotoUploadChange(fileUrls){
                this.ruleForm.xuanjianghuiPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}</style>

