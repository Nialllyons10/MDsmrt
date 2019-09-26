import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import toastr from 'toastr'

import { uploadImage } from '../../actions/imageActions'
import Spinner from '../common/Spinner'

class UploadImage extends Component {
  state = {
    title: '',
    patientid: '',
    description: '',
    tags: '',
    buffer: null,
    file: null,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  captureFile = (event) => {
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result),
        file: URL.createObjectURL(file),
      })
    }
  }

  handleUploadImage = async (event) => {
    event.preventDefault()
    const { title, patientid, description, tags, buffer } = this.state
    console.log(title, patientid, description, buffer)
    try {
      await this.props.uploadImage(
        buffer,
        title,
        patientid,
        description,
        tags,
        this.props.history
      )
      toastr.success('Scan uploaded.')
    } catch (error) {
      toastr.error(error)
    }

    this.props.history.push('/imageHome')
  }

  render() {
    return (
      <div>
        <section className="banner-area other-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Upload New Scan</h1>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <fieldset disabled={this.props.loading}>
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center mt-4">New Scan</h1>
                {this.props.loading ? (
                  <Spinner />
                ) : (
                  <p className="lead text-center">
                    Please enter the required information and describe the
                    initial diagnosis made
                  </p>
                )}
                <form
                  className="needs-validation"
                  onSubmit={this.handleUploadImage}
                >
                  <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      required
                    />
                    <div className="invalid-feedback">Title is required.</div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="patientid">Patient ID *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="patientid"
                      placeholder="Patient ID"
                      value={this.state.patientid}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Initial Diagnosis</label>
                    <textarea
                      className="form-control"
                      id="description"
                      placeholder="Initial Diagnosis"
                      rows="3"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tags">Tags *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tags"
                      placeholder="Tags"
                      value={this.state.tags}
                      onChange={this.handleChange}
                      required
                    />
                    <small id="tagsHelpBlock" className="form-text text-muted">
                      E.g Scan Type
                    </small>
                    <div className="invalid-feedback">Tags are required.</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="file">Scan *</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="file"
                      onChange={this.captureFile}
                      required
                    />
                    <div className="invalid-feedback">Image required.</div>
                  </div>
                  <small className="d-block pb-3">* = required fields</small>
                  <small className="d-block pb-3">
                    Uploading the same file multiple times will result in the
                    same file with the same hash being uploaded.
                  </small>
                  <div className="mb-3">
                    <Link to="/imageHome" className="btn btn-secondary mr-2">
                      Cancel
                    </Link>
                    <button type="submit" className="btn btn-primary">
                      Upload
                    </button>
                  </div>
                </form>
                {this.state.file && (
                  <div className="text-center mt-3 mb-3">
                    <img
                      src={this.state.file}
                      className="img-thumbnail"
                      alt="Preview"
                    />
                  </div>
                )}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.image.loading,
})

export default connect(
  mapStateToProps,
  { uploadImage }
)(UploadImage)
