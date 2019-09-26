import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './ImageItem.css'
import { textTruncate } from '../../utils/string'

class PatientImageItem extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
  }

  render() {
    const {
      ipfsHash,
      title,
      patientID,
      description,
      uploadedOn,
    } = this.props.image

    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img
            className="card-img-top"
            src={`https://ipfs.io/ipfs/${ipfsHash}`}
            alt="Card"
          />
          <div className="card-body">
            <h4 className="card-text">Title: {title}</h4>
            <h4 className="card-text">Patient ID: {patientID}</h4>
            <hr />
            <div>
              <a
                target="_blank"
                href={`https://ipfs.io/ipfs/${ipfsHash}`}
                className="card-link"
              >
                View on IPFS
              </a>
            </div>
          </div>
          <div className="card-footer text-muted">
            <small>
              {uploadedOn === 'Pending'
                ? 'PENDING'
                : `Uploaded by doctor on ${uploadedOn}`}
            </small>
          </div>
        </div>
      </div>
    )
  }
}

export default PatientImageItem
