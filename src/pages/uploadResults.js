import React from "react"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"

import { createWorker } from 'tesseract.js';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';
import '../components/layout.css';


registerPlugin(FilePondPluginImagePreview);


class Tesseract extends React.Component {
constructor(props){
    super(props)
    this.state = {
        isProcessing : false,
        ocrText : '',
        pctg : '0.00'
    }
    this.pond = React.createRef();
    this.worker = React.createRef();
    this.updateProgressAndLog = this.updateProgressAndLog.bind(this);
}


async doOCR(file) {
    this.setState({
        isProcessing : true,
        ocrText : '',
        pctg : '0.00'
    })
    // Loading tesseract.js functions
    await this.worker.load();
    // Loading language as 'English'
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    // Sending the File Object into the Recognize function to
    // parse the data
    const { data: { text } } = await this.worker.recognize(file.file);

    let eligibleFlag = false;
    if(text.toString().toLowerCase().includes('positive')){
        eligibleFlag = true;
    }
    else if (text.toString().toLowerCase().includes('negative')) {
        eligibleFlag = false;
    }
    // });

    this.setState({
        isProcessing : false,
        ocrText : text,
        eligible: eligibleFlag
    })
};
updateProgressAndLog(m){

    // Maximum value out of which percentage needs to be
    // calculated. In our case it's 0 for 0 % and 1 for Max 100%
    // DECIMAL_COUNT specifies no of floating decimal points in our
    // Percentage
    var MAX_PERCENTAGE = 1 ;
    var DECIMAL_COUNT = 2 ;

        if(m.status === "recognizing text"){
            var pctg = (m.progress / MAX_PERCENTAGE) * 100
            this.setState({
                pctg : pctg.toFixed(DECIMAL_COUNT)
            })

        }
    }
    componentDidMount(){
        // Logs the output object to Update Progress, which
        // checks for Tesseract JS status & Updates the progress
        this.worker = createWorker({
            logger: m => this.updateProgressAndLog(m),
        });

    }
    render() {
        return (
            <Layout>
            <div className="App">
                <div className="container">
                    <div style={{marginTop : "17%"}} className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <FilePond ref={ref => this.pond = ref}
                                onaddfile={(err,file) =>{
                                    this.doOCR(file);

                                }}
                                onremovefile={(err,file) =>{
                                    this.setState({
                                        ocrText : ''
                                    })
                                }}
                                />
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                    <div className="card">
                        <h5 className="card-header">
                            <div style={{margin : "1%", textAlign: "left"}} className="row">
                                <div className="col-md-12">
                                    <i className={"fas fa-sync fa-2x " + (this.state.isProcessing ? "fa-spin" : "")}></i> <span className="status-text">{this.state.isProcessing ? `Processing Image ( ${this.state.pctg}% )` : ""} </span>
                                </div>

                            </div>

                        </h5>
                        <div class="card-body" style={{marginBottom : "17%"}}>
                            <p class="card-text">{(this.state.isProcessing) ?
                                    ''
                                    : this.state.ocrText.length === 0 ? "Upload your COVID-19 Test Results (use only .PNG or .JPG files)" : 
                                    this.state.eligible 
                                        ? 
                                        <Button href="/eligible" variant="outlined" color="primary" size="large">
                                            Continue
                                        </Button> 
                                        : 
                                        <Button href="/notEligible" variant="outlined" color="primary" size="large">
                                            Continue
                                        </Button> }</p>
                            </div>
                        </div>


                        <div className="ocr-text">

                        </div>
                    </div>

                </div>
                </Layout>
            );}
        }

    export default Tesseract

