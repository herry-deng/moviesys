import React from "react"

export default class extends React.Component {
    state = {
        img: ""
    }
    render(){
        return (
            <h1>
                欢迎使用电影管理系统
            </h1>
            // <ImgUploader curImgUrl="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2684587105,561431257&fm=15&gp=0.jpg" />
            // <ImgUploader value={this.state.img}
            // onChange={newurl => {
            //     this.setState({
            //         img: newurl
            //     })
            // }} />
        );
    }
}