import './icon-upload.css';

import React from 'react';
import PropTypes from 'prop-types';
import FileInput from 'src/components/file-input';
import ImageReader from 'src/utils/read-image';
/**
 * @class
 * @name IconUpload
 *
 * @description This component accepts files. You can click on it and select a
 * file, or drop a file on it. Upon recieving a new file, onChange is triggered.
 * What you do with the file is implmented with the onChange handler.
 */
export class IconUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
            message: null,
        };

        this.handleAccept = this.handleAccept.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    /**
     * take image and resize it, then put it in base64 and send to server
     * @param  {array} acceptedFiles array of file objects
     */
    handleAccept(acceptedFiles) {
        const {
            iconSize,
            onChange,
        } = this.props;

        if (acceptedFiles.length !== 0) {
            const file = acceptedFiles[0];
            const onSuccess = (dataURL) => {
                onChange(dataURL);
                this.setState({
                    uploadedFile: file.name,
                });
            };

            ImageReader.readImage(file, iconSize, onSuccess);
        }
    }

    /**
     * Display message if an invalid file was uplaoded
     * @param  {array} rejectedFiles array of file objects
     */
    handleReject(rejectedFiles) {
        if (rejectedFiles.length !== 0) {
            this.setState({
                uploadedFile: null,
                message: rejectedFiles[0].name + ' is not valid icon type.',
            });
        }
    }

    render() {
        const {
            handleAccept,
            handleReject,
            props: {
                isEditable,
                iconSize: {
                    height,
                    width,
                },
            },
            state: {
                uploadedFile,
                message,
            },
        } = this;
        return (
            <FileInput
                types='image/jpeg, image/png, image/jpg'
                isEditable={ isEditable }
                handleAccept={ handleAccept }
                handleReject={ handleReject }>
                { uploadedFile ? (
                    <div className="fileName">
                        { uploadedFile }
                    </div>
                ) : (
                    <div>{ message || (<span>Drag and drop an {height} x {width} icon</span>) }</div>
                )}
            </FileInput>
        );
    }
}

IconUpload.propTypes = {
    onChange: PropTypes.func,
    icon: PropTypes.object,
    iconSize: PropTypes.object,
    isEditable: PropTypes.bool,
};
