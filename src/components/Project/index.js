function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://camo.githubusercontent.com/586e3743a34f1c88ec82586d290e34917074c063225acf05bdd1a9d8d12a05c8/68747470733a2f2f692e696d6775722e636f6d2f4362677a4f54322e706e67" className="card-img-top"
                            alt="Meets screenshot" />
                        <div className="card-body">
                            <h5>Meets</h5>
                            <p>Next generation social planning app with A.I. integration. Winner of the Best UX and UI Design as well as People's Choice awards for the Winter 2020 University of Washington Coding Bootcamp.</p>
                            <div className="row">
                                <div className="col">
                                    <a href="https://uw-meets.herokuapp.com/" className="portfolio-btn btn btn-success">Live Deployment</a>
                                </div>
                                <div className="col">

                                    <a href="https://github.com/chomieu/Meets" className="portfolio-btn btn btn-success">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=200&q=80" className="card-img-top"
                            alt="Beer clink" />
                        <div className="card-body">
                            <h5>The Full Tankard</h5>
                            <p>Introducing "The Full Tankard": a free, streamlined, fully responsive web application that allows bar managers to find and save information about local beers and craft breweries in the Pacific Northwest (and beyond) without leaving the floor, built in JQuery, CSS, and HTML on top of the Materialize framework.</p>
                            <div className="row">
                                <div className="col">
                                    <a href="https://seagda.github.io/the-full-tankard/" className="btn btn-success">Live Deployment</a>
                                </div>
                                <div className="col">
                                    <a href="https://github.com/seagda/the-full-tankard" className="btn btn-success">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <img src="https://raw.githubusercontent.com/Elias-Calagiu/notetaker/main/Notetaker%20screenshot.PNG" className="card-img-top"
                            alt="note taker screenshot" />
                        <div className="card-body">
                            <h5>Note Taker</h5>
                            <p>Simple Note Taker app which allows for users to add, save, and delete notes</p>
                            <div className="row">
                                <div className="col">
                                    <a href="https://stark-everglades-80427.herokuapp.com/" className="btn btn-success">Live Deployment</a>
                                </div>
                                <div className="col">
                                    <a href="https://github.com/Elias-Calagiu/notetaker" className="btn btn-success">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://raw.githubusercontent.com/Elias-Calagiu/react-employee-directory/main/employee%20directory%20react%20hw.PNG" className="card-img-top"
                            alt="screenshot of user directory" />
                        <div className="card-body">
                            <h5>React Employee Directory</h5>
                            <p>Find employees in your database - created with React</p>
                            <div className="row">
                                <div className="col">
                                    <a href="https://ec-react-employee-directory.herokuapp.com/" className="btn btn-success">Live Deployment</a>
                                </div>
                                <div className="col">
                                    <a href="https://github.com/Elias-Calagiu/react-employee-directory" className="btn btn-success">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <img src="https://raw.githubusercontent.com/Elias-Calagiu/Password-Generator/main/password%20generator%20screenshot.PNG" className="card-img-top"
                            alt="password generator screenshot" />
                        <div className="card-body">
                            <h5>Password Generator</h5>
                            <p>Simple password generator that asks user how they'd like their password to be generated and generates a random password based on their responses.</p>
                            <div className="row">
                                <div className="col">
                                    <a href="https://elias-calagiu.github.io/Password-Generator/" className="btn btn-success">Live Deployment</a>
                                </div>
                                <div className="col">
                                    <a href="https://github.com/Elias-Calagiu/Password-Generator" className="btn btn-success">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card">
                        <img src="https://raw.githubusercontent.com/Elias-Calagiu/online-offline-budget-tracker/main/budget%20tracker%20screenshot.PNG" className="card-img-top"
                            alt="screenshot of progressive budget" />
                        <div className="card-body">
                            <h5>Progressive Budget</h5>
                            <p>This budget tracker allows users to add and save income and expenses while they do not have internet access and reflects those changes when back online</p>
                            <div className="row">
                                <div className="col">
                                    <a href="https://radiant-ravine-10806.herokuapp.com/" className="btn btn-success">Live Deployment</a>
                                </div>
                                <div className="col">
                                    <a href="https://github.com/Elias-Calagiu/online-offline-budget-tracker" className="btn btn-success">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;