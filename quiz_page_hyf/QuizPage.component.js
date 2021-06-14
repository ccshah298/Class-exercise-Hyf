import React from 'react';
import PageHeader from '../../components/PageHeaderComponent/PageHeader';
import QuestionComponent from '../../components/Question/QuestionComponent';
import QuizAnswers from '../../components/QuizAnswers/QuizAnswers';
import SideMenu from '../../components/sideMenubar/sideMenu';
import Buttons from '../../components/Buttons/Buttons';
import ProgressBar from '../../components/ProgressBar.components/ProgressBar';
import image1 from '../../assets/images/questionBackgrounds/question1background.png';
import PropTypes from 'prop-types';
import './QuizPage.styles.css';

export const QuizPage = ({imageSrc,question,isAgreementQuestion,firstAnswer,secondAnswer,level,onClick}) => {
  return (
    <div>
      <div className="main">
        <div className="header_page">
          <PageHeader />
        </div>
        <div className="middle_page">
          <div className="sidemenu_page">
            <SideMenu highLightItem={3} />
          </div>
          <div className="question_page">
            <QuestionComponent
              imageSrc={imageSrc}
              question={question}
            />
            <div className="quizans_page">
              <QuizAnswers
                isAgreementQuestion={isAgreementQuestion}
                firstAnswer={firstAnswer}
                secondAnswer={secondAnswer}
              />
            </div>
          </div>
        </div>
        <div className="button_page">
          <Buttons label="Next" size="big" isMono={false} onClick={onClick}/>
        </div>
        <div className="progressbar_page">
          <ProgressBar level={level} backgroundColor="white" alphaLevel={0.5} />
        </div>
      </div>
    </div>
  );
};
QuizPage.propTypes = {
  imageSrc: PropTypes.string,
  question: PropTypes.string,
  isAgreementQuestion: PropTypes.bool,
  firstAnswer: PropTypes.string,
  secondAnswer: PropTypes.string,
  level: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
QuizPage.defaultProps = {
  imageSrc:image1,
  question:"When visiting a website, what is it that you are most interested in?",
  isAgreementQuestion:false,
  firstAnswer:"How the website looks and how easy it is for the users",
  secondAnswer:"Logic behind how the website is built",
  level:"20",
};