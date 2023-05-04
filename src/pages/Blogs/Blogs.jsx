import React from 'react'
import { BsDownload } from "react-icons/bs";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blogs = () => {
  
  return (
    <div>
      <div className='w-100 BannerBg'>
        <h2 className='my-0 p-4 text-center text-white d-flex justify-content-center align-items-center gap-5'>Blogs 
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}><BsDownload className='fs-6' title='Download PDF'></BsDownload></button>}
      </Pdf></h2>
      </div>
      <div ref={ref} className='container m-5'>
      <div className='question-item'>
        <h1 className='bg-secondary py-2 text-light px-2 rounded fw-bold fs-4'>1. Tell us the differences between uncontrolled and controlled componentst?</h1>
        <p className='fs-5 text-justify px-2 md:px-3'><strong>Uncontrolled Vs controlled components : </strong><br></br>
        Uncontrolled component do not provide a way to manage the input value or states. They are not managed by the software system and can be modified by users or other components without the systems knowledge. Whereas controlled componenets provide the system with more controling servece. Such as handle input filed value & states as your wish.
        </p>
      </div>

      <div className='question-item'>
        <h1 className='bg-secondary py-2 text-light px-2 rounded fw-bold fs-4'>2. How to validate React props using PropTypes?</h1>
        <p className='fs-5 text-justify px-2 md:px-3'>PropTypes is a built-in library that allows to validate a props that are passed into a component. Using the PropTypes a developer catch error early in the development process.
        </p>
        <p className='fs-5 text-justify px-2 md:px-3'><strong>Process of using PropTypes:</strong><br></br></p>
        <ul className='fs-5'>
        <li>At first import Proptypes from ‘props-types’.</li>
        <li>Define propTypes</li>
        <li>Use propTypes in the component</li>
        </ul>
      </div>

      <div className='question-item'>
        <h1 className='bg-secondary py-2 text-light px-2 rounded fw-bold fs-4'>3. Tell us the difference between nodejs and express js?</h1>
        <p className='fs-5 text-justify px-2 md:px-3'><strong>Node Js Vs Express Js : </strong><br></br>
        Node.js is a runtime environment for executing JavaScript code outside of a web browser. It allows developers to use JavaScript on the server-side. With Node.js, developers can access the file system, network, and other system resources using JavaScript. Node.js provides a non-blocking I/O model that help us for building real-time and data-intensive applications. <br></br><br></br>
        Express.js is a web application framework for Node.js. It provides lots of tools and features for building web applications. It also provide APIs features. Express.js makes it easier to handle HTTP requests, manage routes, and process data.
        </p>
      </div>

      <div className='question-item'>
        <h1 className='bg-secondary py-2 text-light px-2 rounded fw-bold fs-4'>4.	What is a custom hook, and why will you create a custom hook?</h1>
        <p className='fs-5 text-justify px-2 md:px-3'><strong>Custom hooks : </strong><br></br>
        A custom hook is a special  reusable function whose name starts with 'use' and which can be used to call other hooks if needed. Custom hooks includes some pieces of logic and access them from multiple components.
        </p>
      </div>
    </div>
    </div>

  )
}

export default Blogs