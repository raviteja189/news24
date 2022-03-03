import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

export default class News extends Component {


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page:1,
            loading:false
        }
        document.title=`${this.props.category} -News24/7`
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.Apikey}&page=${this.state.page}&pageSize=10`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
       
        this.setState(
            { 
                
                
                articles: parsedData.articles,
                loading:false
            });
    }

    async componentDidMount() {
      this.updateNews()
    }

    handleprev =async()=>{
        
        this.setState({ page:this.state.page-1})
        this.updateNews()
    }

    handlenext =async()=>{
        
        this.setState({ page:this.state.page1})
        this.updateNews()

    }
    
    render() {
        return (

            <div className="container my-3">
                <h1 className='text-center' style={{margin:'30px 0px'}}>News24/7-Top headlines from {this.props.category} </h1>
                {this.state.loading&&<Spinner/>}
                <div className="row">
                    {!(this.state.loading)&&this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 50) : ""} urlImage={element.urlToImage} newsUrl={element.url} author={element.author? element.author:"unknown"} date={element.publishedAt} source={element.source.name}/>
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
