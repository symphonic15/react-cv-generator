import { useState, useRef } from 'react';
import Modal from 'react-modal';
import Cropper from 'react-easy-crop';
import './scss/Modal.scss';

const HeaderModal = ({properties, show, onClose}) => {
  const [thumbnail, setThumbnail] = useState(properties.header.thumbnail);
  const [fullname, setFullname] = useState(properties.header.fullname);
  const [specialty, setSpecialty] = useState(properties.header.specialty);
  const [contactItems, setContactItems] = useState(properties.header.contact);

  // Thumbnail data
  const canvasRef = useRef(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [sourceImage, setSourceImage] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onThumbnailConfirmed = (event) => {
    event.preventDefault();
    setThumbnail(thumbnailPreview);
    setThumbnailPreview("");
    setSourceImage("");
  }
  const onThumbnailCanceled = (event) => {
    event.preventDefault();
    setThumbnailPreview("");
    setSourceImage("");
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = document.getElementById('source');

    canvas.setAttribute('width', croppedAreaPixels.width);
    canvas.setAttribute('height', croppedAreaPixels.height);
    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    setThumbnailPreview(canvas.toDataURL());
  }

  const onUploadedImage = async (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if(file) {
      const fileBase64 = await convertBase64(file);
      setSourceImage(fileBase64);
      event.target.value = null;
    }
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(typeof fileReader.result === 'string' ? fileReader.result : "");
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    })
  }

  const setContactItem = (event) => {
    setContactItems(prevContactItems => ({
      ...prevContactItems,
      [event.target.name]: event.target.value
    }));
  }
  
  const confirmChanges = () => {
    properties.header.thumbnail = thumbnail;
    properties.header.fullname = fullname;
    properties.header.specialty = specialty;
    properties.header.contact = contactItems;
    closeModal();
  }

  const closeModal = () => {
    setFullname(properties.header.fullname);
    setSpecialty(properties.header.specialty);
    setContactItems(properties.header.contact);
    onClose();
  }

  return (
    <Modal
      isOpen={show}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <div className="modal-title">
          <h1>Header - Encabezado</h1>
        </div>
        <div className="modal-close" onClick={() => closeModal()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      
      <div className="modal-body">
        <form className="form-edit">
          <div className="form-edit-thumbnail">
            <div className="form-edit-thumbnail-img" style={{display: sourceImage ? 'none' : 'block'}}>
              <img src={thumbnail} alt="Foto" />
              <label htmlFor="select-thumbnail-file" className="form-edit-thumbnail-overlay">
                <i className="fas fa-pencil-alt"></i>
              </label>
            </div>
            <div className="form-edit-thumbnail-cropper" style={{ display: sourceImage ? 'block' : 'none'}}>
              <input id="select-thumbnail-file" type="file" style={{display: 'none'}} onChange={onUploadedImage} accept="image/*" />
              <img id="source" src={sourceImage} alt="Thumbnail source" style={{display: 'none'}} />
              <canvas ref={canvasRef} style={{display: 'none'}}></canvas>
              <div style={{ display: sourceImage ? 'block' : 'none', width: '100%', height: '250px', position: 'relative'}}>
                <Cropper
                  image={sourceImage}
                  crop={crop}
                  zoom={zoom}
                  aspect={1/1}
                  showGrid={false}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <button className="form-edit-thumbnail-cancel" onClick={(e) => onThumbnailCanceled(e)}>
                <i class="fas fa-times"></i>
              </button>
              <button className="form-edit-thumbnail-confirm" onClick={(e) => onThumbnailConfirmed(e)}>
                <i class="fas fa-check"></i>
              </button>
            </div>
          </div>
          <hr className="separator" />
          <div className="form-edit-item">
            <label className="form-edit-label">Full name - Nombre completo</label>
            <input type="text" className="form-edit-input" value={fullname} onChange={(e) => {setFullname(e.target.value)}} />
          </div>
          <div className="form-edit-item">
            <label className="form-edit-label">Professional title - Título/especialidad</label>
            <input type="text" className="form-edit-input" value={specialty} onChange={(e) => {setSpecialty(e.target.value)}} />
          </div>
          <hr className="separator" />
          <div className="form-edit-item">
            <label className="form-edit-label">Location - Localidad</label>
            <input type="text" name="location" className="form-edit-input" value={contactItems.location} onChange={(e) => {setContactItem(e)}} />
          </div>
          <div className="form-edit-item">
            <label className="form-edit-label">Phone - Teléfono</label>
            <input type="text" name="phone" className="form-edit-input" value={contactItems.phone} onChange={(e) => {setContactItem(e)}} />
          </div>
          <div className="form-edit-item">
            <label className="form-edit-label">Email</label>
            <input type="text" name="email" className="form-edit-input" value={contactItems.email} onChange={(e) => {setContactItem(e)}} />
          </div>
          <div className="form-edit-item">
            <label className="form-edit-label">Linkedin</label>
            <input type="text" name="linkedin" className="form-edit-input" value={contactItems.linkedin} onChange={(e) => {setContactItem(e)}} />
          </div>
          <div className="form-edit-item">
            <label className="form-edit-label">Github</label>
            <input type="text" name="github" className="form-edit-input" value={contactItems.github} onChange={(e) => {setContactItem(e)}} />
          </div>
          <div className="form-edit-item">
            <label className="form-edit-label">Stackoverflow</label>
            <input type="text" name="stackoverflow" className="form-edit-input" value={contactItems.stackoverflow} onChange={(e) => {setContactItem(e)}} />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button className="action-btn cancel-btn" onClick={() => closeModal()}><i class="fas fa-times"></i></button>
        <button className="action-btn accept-btn" onClick={() => confirmChanges()}><i class="fas fa-check"></i></button>
      </div>
    </Modal>
  );
}

export default HeaderModal;