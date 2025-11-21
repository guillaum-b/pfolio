import React, { useState } from "react";
import mock_leb from '../assets/images/mock_leb.jpg';
import mock_tt from '../assets/images/mock_tt.jpg';
import mock_basket from '../assets/images/mock_basket.jpg';
import mock_cc from '../assets/images/mock_cc.png';
import mock_tennis from '../assets/images/mock_tennis.jpg';
import mock_plane from '../assets/images/mock_plane.jpg';
import mock_pets from '../assets/images/mock_pets.jpg';
import mock_potential from '../assets/images/mock_potential.jpg';
import mock_football from '../assets/images/mock_foot.jpg';
import mock_tt_video from '../assets/images/tt_video.mp4';
import mock_dash from '../assets/images/mock_dash.png';
import mock_pcm from '../assets/images/mock_pcm.jpg';
import '../assets/styles/Project.scss';

function Project() {
    type ShowMoreKey = 'tableTennis' | 'powerSplit'| 'dataWarehouse'| 'usAirTraffic' | 'nbaSalaries' | 'cyclocrossElo' | 'tennisPrediction' | 'potential' | 'powerbi';

    const [showMoreStates, setShowMoreStates] = useState({
        tableTennis: false,
        powerSplit: false,
        dataWarehouse: false,
        usAirTraffic: false,
        nbaSalaries: false,
        cyclocrossElo: false,
        tennisPrediction: false,
        potential: false,
        powerbi:false
    });

    const toggleShowMore = (key: ShowMoreKey) => {
        setShowMoreStates(prev => ({ ...prev, [key]: !prev[key] }));
    };
    return(
    <>
    <div className="projects-container" id="internships">
        <h1>Internships</h1>
        <div className="projects-grid">
            {/* Projet Power Split */}
            <div className="project">
                <img src={mock_tt} className="project-image zoom" alt="thumbnail" />
                <h2>Power Split Algorithm for Individual Time Trials in Road Cycling</h2>
                <p className="subtitle">
                    <em>Internship completed at the end of the third year of engineering school in Applied Mathematics. Supervised by Paolo Fondin, Lead Data Scientist at Team Visma Lease a Bike</em>
                </p>
                <p>Implemented a power split optimization algorithm (dividing the course into segments with target power values) to optimize a rider's time. Using training data or professional race data stored in .FIT files, I modeled the impact of external factors on performance.</p>
                <div className="skills-chips">
                    <span className="chip">Machine Learning</span>
                    <span className="chip">Differential Evolution Algorithm</span>
                    <span className="chip">Performance Data Processing</span>
                    <span className="chip">Geographic Data Processing (.GPX)</span>
                    <span className="chip">Python Programming</span>
                </div>

                <button 
                    className="see-more-btn" 
                    onClick={() => toggleShowMore("powerSplit")}
                >
                    {showMoreStates.powerSplit ? 'See less' : 'See more'}
                </button>

                {showMoreStates.powerSplit && (
                    <>
                        <p>Main tasks included:</p>
                        <ul>
                            <li>Detecting turns from a .GPX file to model their impact on a time trial</li>
                            <li>Developing a predictive model for how turns affect rider performance</li>
                            <li>Integrating turn impact into the optimization algorithm for power splits</li>
                            <li>Integrating weather impact</li>
                            <li>Researching and quantifying as many external performance factors as possible</li>
                        </ul>
                    </>
                )}
            </div>

            {/* Projet Table Tennis */}
            <div className="project">
                <img src={mock_leb} className="project-image zoom" alt="thumbnail" />
                <h2>French National Team Table Tennis Analysis</h2>
                <p className="subtitle">
                    <em>Internship completed at the end of the second year of the Bachelor's in Data Science, at the LIRIS research laboratory in Lyon, France</em>
                </p>
                <p>Assisted the staff of the French National Table Tennis Team before and during the Paris 2024 Olympic Games with data science–related tasks.</p>
                <div className="skills-chips">
                    <span className="chip">Relational Databases</span>
                    <span className="chip">Python Programming</span>
                    <span className="chip">R</span>
                    <span className="chip">SQL</span>
                </div>

                <button 
                    className="see-more-btn" 
                    onClick={() => toggleShowMore("tableTennis")}
                >
                    {showMoreStates.tableTennis ? 'See less' : 'See more'}
                </button>

                {showMoreStates.tableTennis && (
                    <>
                        <p>Main tasks included:</p>
                        <ul>
                            <li>Creating and updating a relational database to store match data</li>
                            <li>Automating video compilations using SQL queries</li>
                            <li>Generating automated data tables for a given match</li>
                        </ul>
                        <p className='video_legend'>Compilation of Wang Chuqin’s short returns against Felix Lebrun during the WTT Finals Men Doha 2023 :</p>
                        <video className="video-responsive" autoPlay loop muted>
                            <source src={mock_tt_video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p>The main challenge I overcame was understanding a sport that was completely new to me.</p>
                    </>
                )}
            </div>

        </div>
    </div>
    <div className="projects-container" id="sports-projects">
        <h1>Sports projects</h1>
        <div className="projects-grid">
            
            {/* Projet Potentiel cyclisme */}
            <div className="project">
                <img src={mock_potential} className="project-image zoom" alt="thumbnail" />
                {/* <img src={mock_cyclisme} className="zoom" alt="thumbnail" width="100%" /> */}
                <h2>Rider Potential Prediction in Road Cycling</h2>
                <p className="subtitle">
                    <em>
                        Ongoing project during the third year of the Bachelor's in Data Science. 
                        Supervised by Paolo Fondin, Lead Data Scientist at Team Visma Lease a Bike
                    </em>
                </p>
                <p>
                    I am creating Machine Learning models to predict a rider's potential over four years based on a physiological test in road cycling. 
                    I use variables such as, Anaerobic Threshold, FatMax Power, Max Lactate Steady State (MLSS), VO2max, or VLamax from physiological tests 
                    to predict performance indicators that I create from race results.
                </p>
                <div className="skills-chips">
                    <span className="chip">Machine Learning</span>
                    <span className="chip">Creation of Performance Indicators</span>
                    <span className="chip">Feature engineering</span>
                    <span className="chip">Database design and implementation</span>
                    <span className="chip">Python Programming</span>
                    <span className="chip">Web Scraping (Python)</span>
                </div>
                <button 
                    className="see-more-btn" 
                    onClick={() => toggleShowMore("potential")}
                >
                    {showMoreStates.potential ? 'See less' : 'See more'}
                </button>

                {showMoreStates.potential && (
                    <>
                        <p>The goal of this project is to create relevant performance indicators so that a coach can understand, based on a physiological test performed by a rider, what results the rider can be expected to achieve in different types of races. To do this, I use physiological test results from a sample of riders as input, along with other rider-specific variables. I then predict the values of the various indicators over four seasons</p>
                        <p>Main tasks include:</p>
                        <ul>
                            <li>Scraping all races and rankings related to our sample of riders</li>
                            <li>Creating a database to store the files</li>
                            <li>Creating performance indicators for the riders</li>
                            <li>Modeling the indicators based on physiological variables</li>
                            <li>Feature engineering to identify relevant input variables</li>
                        </ul>
                    </>
                )}
            </div>

            {/* Projet Classification foot */}
            <div className="project">
                <img src={mock_football} className="project-image zoom" alt="thumbnail" />
                <h2>Event Prediction Using StatsBomb Data</h2>
                <p className="subtitle">
                    <em>Ongoing project during the third year of the Bachelor's in Data Science</em>
                </p>
                <p>
                    I use StatsBomb Open Data in order to implement classification methods such as K-Nearest Neighbors (KNN), Linear Discriminant Analysis (LDA), and Decision Trees to predict whether a shot will be on target, whether a pass will lead to a shot shortly afterward, or whether a corner will result in a shot
                </p>
                <div className="skills-chips">
                    <span className="chip">K-Nearest Neighbors (KNN)</span>
                    <span className="chip">Linear Discriminant Analysis (LDA)</span>
                    <span className="chip">Decision Trees</span>
                    <span className="chip">R Programming</span>
                </div>
            </div>

            {/* Projet NBA Salaries */}
            <div className="project">
                <img src={mock_basket} className="project-image zoom" alt="thumbnail" />
                <h2>NBA Player Salary Prediction</h2>
                <p className="subtitle">
                    <em>Project completed in 2nd year of the Bachelor's in Data Science</em>
                </p>
                <p>
                    Modeled and explained NBA player salaries based on individual statistics, position, and age 
                    (467 players, 51 variables, 2022/2023 season).
                </p>
                <div className="skills-chips">
                    <span className="chip">Statistical Modeling</span>
                    <span className="chip">Multiple Linear Regression / ANCOVA</span>
                    <span className="chip">Variable Transformation & Multicollinearity Management</span>
                    <span className="chip">Variable Selection (BIC, Mallows CP)</span>
                    <span className="chip">R Programming</span>
                </div>
            </div>

            {/* Projet Cyclocross ELO */}
            <div className="project">
                <img src={mock_cc} className="project-image zoom" alt="thumbnail" />
                <h2>Cyclocross ELO Ranking</h2>
                <p className="subtitle">
                    <em>Personal Project</em>
                </p>
                <p>
                    Implemented a dynamic ELO ranking system for cyclocross based on results of 1,350 races since 2000 using web scraping and SQLite.
                </p>
                <div className="skills-chips">
                    <span className="chip">Web Scraping (Python)</span>
                    <span className="chip">Pandas Data Analysis</span>
                    <span className="chip">SQLite Database</span>
                    <span className="chip">Algorithm Implementation (ELO)</span>
                </div>
            </div>

            {/* Projet Tennis Prediction */}
            <div className="project">
                <img src={mock_tennis} className="project-image zoom" alt="thumbnail" />
                <h2>Tennis Match Outcome Prediction</h2>
                <p className="subtitle">
                    <em>Personal Project</em>
                </p>
                <p>
                    Predicted tennis match winners based on previous performances, tournament-related information, and by creating performance indicators (KPIs)
                </p>
                <div className="skills-chips">
                    <span className="chip">Machine Learning</span>
                    <span className="chip">Performance Indicator Creation (KPI)</span>
                    <span className="chip">Web Scraping (Python)</span>
                    <span className="chip">Python Programming</span>
                </div>
            </div>
        </div>
    </div>

    <div className="projects-container" id="other-projects">
        <h1>Other projects</h1>
            <div className="projects-grid">
        {/* Projet US Air Traffic */}
        <div className="project">
        <img src={mock_plane} className="project-image zoom" alt="thumbnail" />         
          <h2>US Domestic Air Traffic Forecasting</h2>
          <p className="subtitle">
            <em>Project completed in 2nd year of the Bachelor's in Data Science</em>
          </p>
          <p>Described and forecasted US domestic air traffic for two weeks using time series modeling with R (135,000 records from 2015).</p>
          <div className="skills-chips">
            <span className="chip">Time Series Modeling</span>
            <span className="chip">R Programming</span>
          </div>
        </div>

        {/* Projet PowerBI */}
        <div className="project">
        <img src={mock_dash} className="project-image_p zoom" alt="thumbnail" />         
          <h2>Creating PowerBI Dashboards</h2>
          <p className="subtitle">
            <em>Project completed in 2nd year of the Bachelor's in Data Science</em>
          </p>
          <p>Created a five-page Power BI dashboard based on a company’s human resources data as well as data related to electrical consumption</p>
          <div className="skills-chips">
            <span className="chip">Power BI</span>
            <span className="chip">Power Query</span>
            <span className="chip">ETL</span>
            <span className="chip">DAX Programming</span>
          </div>
            <button 
                    className="see-more-btn" 
                    onClick={() => toggleShowMore("powerbi")}
                >
                    {showMoreStates.powerbi ? 'See less' : 'See more'}
                </button>

                {showMoreStates.powerbi && (
                    <>
                        <p>Main tasks included:</p>
                        <ul>
                            <li>Create several interactive sheets with filters and buttons to navigate between the sheets</li>
                            <li>Set up an ETL process to process the data from CSV files</li>
                            <li>Created indicators using the DAX language</li>
                            <li>Used Power Query to process the data</li>
                        </ul>
                    </>
                )}
        </div>
        {/* Pro Cycling Manager */}
        <div className="project">
            <img src={mock_pcm} className="project-image zoom" alt="thumbnail" />
            <h2>Creation of a Realistic Fictional Database for the ProCyclingManager Video Game</h2>
            <p className="subtitle">
                <em>Personal Project</em>
            </p>
            <p>
                Created a database with fictional riders that realistically reflect real-world characteristics. To do this, I studied an existing database and the relationships between the different attributes of professional cyclists. The goal was to build an alternative, customizable database to replace the usual riders
            </p>
            <div className="skills-chips">
                <span className="chip">Database</span>
                <span className="chip">Machine Learning</span>
                <span className="chip">Python Programming</span>
            </div>
        </div>
        
        {/* Projet Data Warehouse */}
        <div className="project">
            <img src={mock_pets} className="project-image zoom" alt="thumbnail" />         
          <h2>Data Integration into a Data Warehouse</h2>
          <p className="subtitle">
            <em>Project completed in 2nd year of the Bachelor's in Data Science</em>
          </p>
          <p>Implemented and fed a ROLAP data warehouse in MySQL via an ETL process using Talend. The project focused on adoption data from SPA du Dauphiné to allow statistical analysis via SQL queries.</p>
          <div className="skills-chips">
            <span className="chip">ETL Development (Talend)</span>
            <span className="chip">Data Integration (CSV, XLS, XML)</span>
            <span className="chip">SQL / OLAP (MySQL)</span>
            <span className="chip">Star Schema Modeling</span>
            <span className="chip">Decision Analysis</span>
          </div>
        </div>
        </div>
    </div>
    </>
    );
}

export default Project;