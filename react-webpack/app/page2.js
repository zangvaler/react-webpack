import React, {Component}from 'react'
import {Prompt} from 'react-router-dom';
export default class page2 extends Component{
    componentWillMount(){
        console.log(this.props);
    }

    constructor(props){
        super(props);
        this.state={
            power:false
        }
        this.changePower=this.changePower.bind(this);
    }
    changePower(){
        alert('已经开启');
        this.setState({
            power:true
        })
    }


    render(){
        return(
            <div>B默认页面,参数:{this.props.match.params.param}
                {/* message：用于显示提示的文本信息。
                when：传递布尔值，相当于标签的开关，默认是true，设置成false时，<Prompt>失效。 */}
                <Prompt message="残忍离开？"when={this.state.power}/>
                <button onClick={this.changePower}>启用</button>
            </div>
        );
    }
}

// 需要注意的是，如果你用MemoryRouter路由模式，<Prompt>不起作用。