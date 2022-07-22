import Container from "./container/container";
export const App = () => {
    
  return (
    // <!--Main_conteiner-->
    <Container>
        {/* <!--Rectangle_1--> */}
        <div class="Rectangle">
        
            {/* <!--Main_content_section--> */}
            <div class="Main_content_section">
                {/* <!--About_me_section--> */}
                <div class="About_me_section">

                    <h2 class="about_me_profession"> Front-End Developer </h2>
                    <h1 class="My_name"> Anton Chornyi</h1>

                    <p class="About_me_description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                    </p>    
                </div>

                {/* <!--My_projects_section--> */}
                <div class="My_projects_section">
                    <h3 class="Main_content_title">Projects</h3>
                
                    <ol class="My_projects_list">
                        <li class="My_projects_item">
                            <a href="https://hellenglish.goit.global/" class="My_projects_link">https://hellenglish.goit.global/</a>
                            <span class="My_projects_text">...................................
                                <span class="My_projects_bracket">[</span> HTML5, CSS3 <span class="My_projects_bracket">]</span>
                            </span>
                        </li>
                    
                        <li class="My_projects_item">
                            <a href="https://kidslike.goit.global/" class="My_projects_link">https://kidslike.goit.global/</a>
                            <span class="My_projects_text">...........................................
                                <span class="My_projects_bracket">[</span> JavaScript <span class="My_projects_bracket">]</span>
                            </span>

                        </li>

                        <li class="My_projects_item">
                            <a href="https://cryptohub.goit.global" class="My_projects_link">https://cryptohub.goit.global/</a>
                            <span class="My_projects_text">....................................
                                <span class="My_projects_bracket">[</span> React.js, Node.js <span class="My_projects_bracket">]</span>
                            </span>

                        </li>
                    </ol>

                </div>

                {/* <!--My_work_experience_section--> */}
                <div class="My_work_experience_section">
                    <h3 class="Main_content_title">Work Experience</h3>

                    {/* <!--Company_3--> */}
                    <div class="My_work_experience_company_block">
                        <h4 class="My_work_experience_position">Front-End Developer <span class="My_work_experience_company"> Freelance </span></h4>
                        <p class="My_work_experience_period">September 2019 - up to now   <span class="My_divider">|</span>   Country </p>
                        <ul class="My_work_experience_duties">
                            <span class="My_work_experience_duty">
                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Risus commodo viverra maecenas. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
                            </span>
                        </ul>
                    </div>
                    {/* <!--Company_2--> */}
                    <div class="My_work_experience_company_block">
                        <h4 class="My_work_experience_position">Manager <span class="My_work_experience_company">Roga & Kopyta New </span></h4>
                        <p class="My_work_experience_period">March 2015 - October 2018   <span class="My_divider">|</span>   Country </p>
                        <ul class="My_work_experience_duties">
                            <span class="My_work_experience_duty">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua.</li>
                                <li>Quis ipsum suspendisse ultrices gravida.</li>
                                <li>Risus commodo viverra maecenas. </li>
                            </span>
                        </ul>
                    </div>
                    {/* <!--Company_1--> */}
                    <div>
                        <h4 class="My_work_experience_position">Manager <span class="My_work_experience_company">Roga & Kopyta LLC </span></h4>
                        <p class="My_work_experience_period">June 2014 - February 2015   <span class="My_divider">|</span>   Country </p>
                        <ul class="My_work_experience_duties">
                            <span class="My_work_experience_duty">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Quis ipsum suspendisse ultrices gravida.</li>
                                <li>Risus commodo viverra maecenas. </li>
                            </span>
                        </ul>
                    </div>
                </div>

                {/* <!--My_education_section--> */}
                <div class="My_education_section">
                    <h3 class="Main_content_title">Education</h3>
                    <h4 class="My_university">National University of Radioelectronics</h4>
                    <h4 class="My_education_specialty">Management</h4>
                    <p class="My_education_period">September 2009 - June 2014   <span class="My_divider">|</span>   Country</p>
                </div>

            </div>

            {/* <!--sidebar_section--> */}
            <div class="sidebar_section">
                <img src="img/photo.jpg" alt="My_photo"/>

                {/* <!--contacts_section-->   */}
                <div class="contacts_section">
                    <h3 class="sidebar_title">Contacts</h3>
                    <div>
                        <span class="contacts_section_type">C:</span>
                        <a class="contacts_section_link" href="tel:+77777777777">+7 777 777 77 77</a>
                    </div>
                    <div>
                        <span class="contacts_section_type">E:</span>
                        <a class="contacts_section_link" href="mailto:chornyiav@gmail.com">chornyiav@gmail.com</a>
                    </div>          
                </div>

                {/* <!--Tech_skills_section-->   */}
                <div class="Tech_skills_section">
                    <h3 class="sidebar_title">Tech Skills</h3>
                    <ul class="Tech_skills_list">
                        <li class="Tech_skills_item"><span class="Tech_skills_item_text">HTML5</span></li>
                        <li class="Tech_skills_item"><span class="Tech_skills_item_text">CSS3</span></li>
                        <li class="Tech_skills_item"><span class="Tech_skills_item_text">GIT</span></li>
                        <li class="Tech_skills_item"><span class="Tech_skills_item_text">WebPack</span></li>
                        <li class="Tech_skills_item"><span class="Tech_skills_item_text">JavaScript</span></li>
                        <li class="Tech_skills_item"><span class="Tech_skills_item_text">React.js</span></li>
                        <li class="Tech_skills_item"><span class="Tech_skills_item_text">Node.js</span></li>
                    </ul>
                </div>
                {/* <!--Soft_skills_section-->  */}
                <div class="Soft_skills_section">

                    <h3 class="sidebar_title">Soft Skills</h3>
                    <ul class="Soft_skills_list">
                        <li class="Soft_skills_item"><span class="Soft_skills_item_text">Scrum</span></li>
                        <li class="Soft_skills_item"><span class="Soft_skills_item_text">Agile</span></li>
                        <li class="Soft_skills_item"><span class="Soft_skills_item_text">GTD</span></li>
                        <li class="Soft_skills_item"><span class="Soft_skills_item_text">Teamwork</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </Container> 
  );
};
