import React, { Component } from 'react'


export default class Newsitem extends Component {

    render() {
        let { title, description, urlImage, newsUrl, author, date ,source} = this.props;
        return (
            <div>
                <div className="card" >
                <span class="position-absolute top-0   translate-middle badge rounded-pill bg-danger" style={{zIndex: '1',left:"90%"}}>
                            {source}
                            </span>
                    <img src={urlImage} className="card-img-top" alt="..." />
                   
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}..</p>
                        <p className="card-text"><small class="text-muted">by {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} targer="_blank" className="btn btn-primary">read more..</a>
                    </div>
                </div>
            </div>
        )
    }
}
