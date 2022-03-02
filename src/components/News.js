import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            page:1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=ph&apiKey=f42e576f3c0545d6811e2e6bfd56032d&pageSize=10";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
    }

    handleprev =async()=>{
        console.log('hi')
        let url = `https://newsapi.org/v2/top-headlines?country=ph&apiKey=f42e576f3c0545d6811e2e6bfd56032d&page=${this.state.page-1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            { 
                
                page:this.state.page-1,
                articles: parsedData.articles 
            });
    }

    handlenext =async()=>{
        console.log('hi')
        let url = `https://newsapi.org/v2/top-headlines?country=ph&apiKey=f42e576f3c0545d6811e2e6bfd56032d&page=${this.state.page+1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            { 
                
                page:this.state.page+1,
                articles: parsedData.articles 
            });
    }
    
    render() {
        return (

            <div className="container my-3">
                <h2>Top headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 50) : ""} urlImage={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}



                </div>
                <div className="container">
                    <div  className="d-flex justify-content-between">
                         <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprev}> &larr;Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
                    </div>

                </div>

            </div>

        )
    }
}
