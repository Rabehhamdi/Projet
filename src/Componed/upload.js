import React, { Component } from 'react'
import './upload.css'
import axios from 'axios'
export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault(); 
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    // add = (event) => {
    //     event.preventDefault();
    //     return axios.post('/uploadFiles', this.state.file).then(() => { this._handleImageChange(event)})
    //         .catch((err) => alert(err))
    // }
    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img class="img" src={imagePreviewUrl} />);
        }
        
        return (
            <div>
                <form onSubmit={this._handleSubmit}  enctype="multipart/form-data" method="POST">
                    <input type="file" class="btn btn-secondary" name="file" onChange={this._handleImageChange} />  
                    { <button type="submit" /*onClick={this.add}*/>Upload</button> }
                </form> 
                {$imagePreview}
            </div>
        )
    }

}