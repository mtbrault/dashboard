import React from 'react';

import { Button } from 'antd';

import Style from './newsInfo.less';

class NewsInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        articles: [],
        type: "",
        title: "",
        url: "",
        img: "",
        text: "",
        auteur: "",
        source: "",
        position: 0
    }

    getNews = async (infoType) => {
        console.log(infoType)
        if (infoType == "economy") {
            const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=d0dd4cc912b5489ca0e37d6295fdb10c`);
            const data = await api_call.json();
            console.log(data);
            this.setState({
                type: infoType,
                articles: data.articles,
                title: data.articles[0].title,
                img: data.articles[0].urlToImage,
                url: data.articles[0].url,
                text: data.articles[0].description,
                auteur: data.articles[0].author,
                source: data.articles[0].source.name
            })
        }
    }

    newAdd = async () => {
        var test = this.state.position;
        test++;
        console.log(test)
        this.setState({ position: test })
        if (this.state.type == "economy") {
            const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=d0dd4cc912b5489ca0e37d6295fdb10c`);
            const data = await api_call.json();
            this.setState({
                title: data.articles[this.state.position].title,
                img: data.articles[this.state.position].urlToImage,
                url: data.articles[this.state.position].url,
                text: data.articles[this.state.position].description,
                auteur: data.articles[this.state.position].author,
                source: data.articles[this.state.position].source.name
            })
            console.log(this.state.title)
        }
    }

    NewArticle() {
        this.newAdd();
    }

    componentDidMount() {
        this.getNews(this.props.infoType)
    }

    render() {
        return (
            <div>
                <div className={Style.newsBoard} >
                    <h2 className={Style.newsTitle}>{this.state.title}</h2>
                    <a href={this.state.url}><img src={this.state.img} /></a>
                    <span className={Style.newsText}>{this.state.text}</span>
                    <span className={Style.newsAuthor}>Article rédigé par : {this.state.auteur} de {this.state.source} </span>
                </div>
                <center><Button type="primary" style={{ background: "black", margin: 10 }} onClick={this.NewArticle.bind(this)}>Nouvelle Article</Button></center>
            </div>
        );
    }
}

export default NewsInfo;