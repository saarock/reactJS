import { useState } from "react"

export default function Main () {

function fetchData(e, file) {
    // console.log(file)
    e.target.innerText = 'Downloading...';
    fetch(file).then(data => data.blob()).then((files) => {
        console.log(files)
        let u = URL.createObjectURL(files);
        let a = document.createElement('a');
        a.href = u;
        a.download = 'image.jpg';
       a.click();
    e.target.innerText = 'Download';

    }).catch(() => {
        alert('Video cannot downloaded.')
    })
}

    let [file, myFile] = useState('')
    return (
        <>
        <div className="container">
            <div className="box">

<div className="text">
    <h1 className="txt">
    Download FILE, images, videos and more by url.
</h1>
<input type="text" className="value" onChange={(e) => myFile(e.target.value)}/>

<div className="button">
    <button className="btn" onClick={(e) => fetchData(e, file)}>Download</button>
</div>
</div>



            </div>
        </div>
        </>
    )
}