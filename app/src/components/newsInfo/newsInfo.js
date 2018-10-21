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

    getNews = async () => {
        const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=fr&category=${this.props.infoType}&apiKey=d0dd4cc912b5489ca0e37d6295fdb10c`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            articles: data.articles,
            title: data.articles[0].title,
            img: data.articles[0].urlToImage,
            url: data.articles[0].url,
            text: data.articles[0].description,
            auteur: data.articles[0].author,
            source: data.articles[0].source.name
        })

    }

    newLess = async () => {
        if (this.state.position != 0) {
            var test = this.state.position;
            test--;
            console.log(test)
            this.setState({ position: test })
            const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=fr&category=${this.props.infoType}&apiKey=d0dd4cc912b5489ca0e37d6295fdb10c`);
            const data = await api_call.json();
            this.setState({
                title: data.articles[this.state.position].title,
                img: data.articles[this.state.position].urlToImage,
                url: data.articles[this.state.position].url,
                text: data.articles[this.state.position].description,
                auteur: data.articles[this.state.position].author,
                source: data.articles[this.state.position].source.name
            })
        }

    }

    newAdd = async () => {

        if (this.state.position != 20) {
            var test = this.state.position;
            test++;
            console.log(test)
            this.setState({ position: test })
            const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=fr&category=${this.props.infoType}&apiKey=d0dd4cc912b5489ca0e37d6295fdb10c`);
            const data = await api_call.json();
            this.setState({
                title: data.articles[this.state.position].title,
                img: data.articles[this.state.position].urlToImage,
                url: data.articles[this.state.position].url,
                text: data.articles[this.state.position].description,
                auteur: data.articles[this.state.position].author,
                source: data.articles[this.state.position].source.name
            })
        }
    }

    NewArticle() {
        this.newAdd();
    }

    LessArticle() {
        this.newLess();
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
                <center>                <Button type="primary" style={{ background: "red", margin: 10 }} onClick={this.LessArticle.bind(this)}>Précedent</Button>
                    <Button type="primary" style={{ margin: 10 }} onClick={this.NewArticle.bind(this)}>Suivant</Button></center>
            </div>
        );
    }
}

export default NewsInfo;