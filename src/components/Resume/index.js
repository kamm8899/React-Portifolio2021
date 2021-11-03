import React from 'react'
import { Document, Page} from 'react-pdf';
import Resume from '../../assets/Resume.pdf'

function ResumeF() {
    return (
        <section className= "Resume">
            <h1>Resume</h1>
            <hr></hr>
            <Document file={Resume} options={{workerSrc: "pdf.worker.js"}}>
                <Page pageNumber={1} />
            </Document>
            <div className="Resume">
                <h2>Technical Proficency: Front End </h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        Materialize
                    </li>
                    <li>
                       JQuery
                    </li>
                    <li>
                        Templating(Handlebars)
                    </li>
                </ul>
                <h2>
                    Technical Proficency: Back End
                </h2>
                <ul>
                    <li>
                        CI/CD
                    </li>
                    <li>
                        Containerizaiton
                    </li>
                    <li>
                        Python Programming
                    </li>
                    <li>
                        Java Programming
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        Mongo
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Data Structures
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        Sequelize
                    </li>
                    <li>
                        API(third-Party, RESTful, server-side)
                    </li>

                </ul>

              <h2>Non Technical Proficiency</h2>  
              <ul>
                  <li>
                      Leadership
                  </li>
                  <li>
                      Agile
                  </li>
                  <li>
                      SDLC
                  </li>
              </ul>


            </div>
        </section>
    )
}

export default ResumeF;
