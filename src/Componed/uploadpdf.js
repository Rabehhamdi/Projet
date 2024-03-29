import React, { Component } from 'react'
 
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

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<iframe src={imagePreviewUrl} frameborder="0" height="500px" width="100%"></iframe>);
            
        }

        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input type="file" class="btn btn-secondary" onChange={this._handleImageChange} />
                </form>
                {$imagePreview}
            </div>
        )
    }

}