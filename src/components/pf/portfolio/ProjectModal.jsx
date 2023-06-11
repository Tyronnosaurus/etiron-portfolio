import React from 'react'
import Button from 'react-bootstrap/Button';
import ControlledCarousel from './ControlledCarousel'
import { Modal } from 'react-bootstrap';


const ProjectModal = ({modalData, show, handleClose}) => {

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
            <Modal.Title>{modalData.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <ControlledCarousel images={modalData.images}/>
            
            <div dangerouslySetInnerHTML={{__html: modalData.description}} />

            <div className="portfolio__item-cta">
                {modalData.github_link && <a href={modalData.github_link} className="btn portfolio__item-btn" target="_blank" rel="noreferrer"> Github </a>}
                {modalData.live_link   && <a href={modalData.live_link}   className="btn portfolio__item-btn" target="_blank" rel="noreferrer"> Live </a>}
            </div>

            <div className="tags">{"Tags: " + modalData.tags.join(', ')}</div>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProjectModal
