/**
 * Created by Jacky.Gao on 2017-07-10.
 */
import BaseTool from './BaseTool.js';
import ActionNode from './ActionNode.js';

export default class ActionTool  extends BaseTool{
    getType(){
        return '动作';
    }
    getIcon(){
        return `<i class="uflo uflo-action" style="color:#737383"></i>`
    }
    newNode(){
        return new ActionNode();
    }
    getConfigs(){
        return {
            in:-1,
            out:-1,
            single:true
        };
    }
    buildActionBean(target){
        const group=$(`<div class="form-group uflo-group"><label>动作Bean：</label></div>`);
        const tip="一个实现了com.bstek.uflo.process.handler.ActionHandler接口并配置到Spring中的Bean ID"
        const beanEditor=$(`<input type="text" placeholder="${tip}" title="${tip}" class="form-control uflo-text-editor" style="width: 265px;">`);
        group.append(beanEditor);
        const selectButton=$(`<button type="button" class="btn btn-default" style="padding: 2px;height: 26px;display: inline-block;margin-left: 2px">选择</button>`);
        group.append(selectButton);
        return group;
    }
    getPropertiesProducer(){
        const _this=this;
        return function (){
            const g=$(`<div></div>`);
            g.append(_this.getCommonProperties(this));
            g.append(_this.buildActionBean(this));
            return g;
        }
    }
}